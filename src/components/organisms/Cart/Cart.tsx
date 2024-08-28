import { Button } from '@/components/atoms/Button';
import { getPurchases } from '@/hook/useQueryPurchases';
import { PurchaseType, statusPurchase } from '@/types/purchase/type';
import { formatCurrency } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useContext, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Quantity } from '../Quantity';
import { produce } from 'immer';
import {
  mutateBuyProducts,
  mutateDeletePurchase,
  mutateUpdatePurchase,
} from '@/hook/useMutatePurchases';
import { keyBy } from 'lodash';
import { toast } from 'react-toastify';
import { AppContext } from '@/states/statusState.context';

export const Cart = () => {
  const { extendedPurchase, setExtendedPurchase } = useContext(AppContext);
  const { data: purchasesInCartData, refetch } = useQuery({
    queryKey: ['purchases', { status: statusPurchase.inCart }],
    queryFn: () =>
      getPurchases({
        status: -1,
      }),
  });

  const purChaseInCart = purchasesInCartData?.data.data;

  const location = useLocation();
  const purchaseIdLocation = (location.state as { purchaseId: string | null })
    ?.purchaseId;

  useEffect(() => {
    setExtendedPurchase((prev) => {
      const extendedPurchasesObject = keyBy(prev, '_id');
      return (
        purChaseInCart?.map((purchase) => {
          const isChoosePurchaseFromLocation =
            purchaseIdLocation == purchase._id;
          return {
            ...purchase,
            disabled: false,
            checked:
              isChoosePurchaseFromLocation ||
              Boolean(extendedPurchasesObject[purchase._id]?.checked),
          };
        }) || []
      );
    });
  }, [purChaseInCart, purchaseIdLocation, setExtendedPurchase]);

  useEffect(() => {
    // xóa state trong history khi refresh F5 trang cart lại thì nó sẽ không còn checked nữa
    history.replaceState(null, '');
  }, []);

  // set checked
  const handleChecked =
    (purchasetIndex: number) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setExtendedPurchase(
        produce((draft) => {
          draft[purchasetIndex].checked = event.target.checked;
        })
      );
    };

  // biến dùng useMemo, function dùng callback
  const isAllChecked = useMemo(
    () => extendedPurchase?.every((purchase) => purchase.checked),
    [extendedPurchase]
  );

  // get checked items
  const checkedPurchases = useMemo(
    () => extendedPurchase.filter((purchase) => purchase.checked),
    [extendedPurchase]
  );

  const checkedPurchasesCount = checkedPurchases.length;

  const useMutateUpdate = useMutation({
    mutationFn: mutateUpdatePurchase,
    onSuccess: () => {
      refetch();
    },
  });

  //  check all item
  const handleCheckAll = () => {
    setExtendedPurchase((prev) =>
      prev.map((purchase) => ({
        ...purchase,
        checked: !isAllChecked,
      }))
    );
  };

  const handleQuantity = (
    purchaseIndex: number,
    value: number,
    enable: boolean
  ) => {
    const purchase = extendedPurchase[purchaseIndex];
    if (enable) {
      setExtendedPurchase(
        produce((draft) => {
          draft[purchaseIndex].disabled = true;
        })
      );
      useMutateUpdate.mutate({
        product_id: purchase.product._id,
        buy_count: value,
      });
    }
  };

  const handleTypeQuantity = (purchasetIndex: number) => (value: number) => {
    setExtendedPurchase(
      produce((draft) => {
        draft[purchasetIndex].buy_count = value;
      })
    );
  };

  // buy products
  const buyProductMutation = useMutation({
    mutationFn: mutateBuyProducts,
    onSuccess: (data) => {
      refetch();
      toast.success(data.data.message, {
        autoClose: 1000,
      });
    },
  });

  // detele product
  const deletePurchasesMutation = useMutation({
    mutationFn: mutateDeletePurchase,
    onSuccess: () => {
      refetch();
    },
  });

  const handleDelete = (purchaseIndex: number) => {
    const purchaseId = extendedPurchase[purchaseIndex]?._id;
    deletePurchasesMutation.mutate([purchaseId]);
  };

  // detele products
  const handleDeleteManyPurchases = () => {
    const purchasesIds = checkedPurchases.map((purchase) => purchase._id);
    deletePurchasesMutation.mutate(purchasesIds);
  };

  // total money
  const totalCheckedPurchasePrice = useMemo(
    () =>
      checkedPurchases.reduce((result, current) => {
        return result + Number(current.product.price) * current.buy_count;
      }, 0),
    [checkedPurchases]
  );

  // total saving price
  const totalCheckedPurchaseSavingPrice = useMemo(
    () =>
      checkedPurchases.reduce((result, current) => {
        return (
          result +
          (current.price_before_discount - current.price) * current.buy_count
        );
      }, 0),
    [checkedPurchases]
  );

  // handle buy product
  const handleBuyPurchases = () => {
    if (checkedPurchases.length > 0) {
      const body = checkedPurchases.map((purchase) => ({
        product_id: purchase.product._id,
        buy_count: purchase.buy_count,
      }));
      buyProductMutation.mutate(body);
    }
  };

  return (
    <div className="bg-neutral-100 py-16">
      <div className="screen-max-width">
        <div className="overflow-auto">
          <div className="min-w-[1000px]">
            <div className="grid grid-cols-12 rounded-sm bg-white py-5 px-9 text-sm capitalize text-gray-500 shadow">
              <div className="col-span-6">
                <div className="flex items-center">
                  <div className="flex flex-shrink-0 items-center justify-center pr-3">
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-orange"
                      checked={isAllChecked}
                      onChange={handleCheckAll}
                    />
                  </div>
                  <div className="flex-grow">Sản phẩm</div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="grid grid-cols-5 text-center">
                  <div className="col-span-2">Đơn giá</div>
                  <div className="col-span-1">Số lượng</div>
                  <div className="col-span-1">Số tiền</div>
                  <div className="col-span-1">Thao tác</div>
                </div>
              </div>
            </div>
            <div className="my-3 rounded-sm bg-white p-5 shadow">
              {extendedPurchase &&
                extendedPurchase.map((purchases, index) => (
                  <div
                    className="mb-5 grid grid-cols-12 rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0"
                    key={index}
                  >
                    <div className="col-span-6">
                      <div className="flex">
                        <div className="flex flex-shrink-0 items-center justify-center pr-3">
                          <input
                            type="checkbox"
                            className="h-5 w-5 accent-orange cursor-pointer"
                            checked={purchases.checked}
                            onChange={handleChecked(index)}
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex">
                            <Link to="/" className="h-20 w-20 flex-shrink-0">
                              <img
                                src={purchases.product.image}
                                alt={purchases.product.name}
                              />
                            </Link>
                            <div className="flex-grow px-2 pt-1 pb-2">
                              <Link to="/" className="line-clamp-2">
                                <span>{purchases.product.name}</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="grid grid-cols-5 items-center">
                        <div className="col-span-2">
                          <div className="flex items-center justify-center">
                            <span className="text-gray-300 line-through">
                              ₫
                              {formatCurrency(
                                Number(purchases.product.price_before_discount)
                              )}
                            </span>
                            <div className="ml-3">
                              ₫{formatCurrency(Number(purchases.product.price))}
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <Quantity
                            max={purchases.product.quantity}
                            value={purchases.buy_count}
                            classNameWrapper="flex item-center"
                            onIncrease={(value) =>
                              handleQuantity(
                                index,
                                value,
                                value <= purchases.product.quantity
                              )
                            }
                            onDecrease={(value) =>
                              handleQuantity(index, value, value >= 1)
                            }
                            disabled={purchases.disabled}
                            onType={handleTypeQuantity(index)}
                            onFocusOut={(value) =>
                              handleQuantity(
                                index,
                                value,
                                value >= 1 &&
                                  value <= purchases.product.quantity &&
                                  value !==
                                    (purChaseInCart as PurchaseType[])[index]
                                      .buy_count
                              )
                            }
                          />
                        </div>
                        <div className="col-span-1">
                          <span className="text-orange">
                            ₫
                            {formatCurrency(
                              Number(purchases.product.price) *
                                purchases.buy_count
                            )}
                          </span>
                        </div>
                        <div className="col-span-1">
                          <button
                            className="bg-none text-black transition-colors hover:text-orange"
                            onClick={() => handleDelete(index)}
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="static bottom-0 z-10 mt-8 flex flex-col rounded-sm border border-gray-100 bg-white p-5 shadow sm:flex-row sm:items-center">
          <div className="flex items-center">
            <div className="flex flex-shrink-0 items-center justify-center pr-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-orange"
                checked={isAllChecked}
                onClick={handleCheckAll}
              />
            </div>
            <button className="mx-3 border-none bg-none">
              Chọn tất cả ({extendedPurchase.length})
            </button>
            <button
              className="mx-3 border-none bg-none"
              onClick={handleDeleteManyPurchases}
            >
              Xóa
            </button>
          </div>

          <div className="mt-5 flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center">
            <div className="">
              <div className="flex items-center sm:justify-end">
                <div className="">
                  Tổng thanh toán ({checkedPurchasesCount} sản phẩm )
                </div>
                <div className="ml-2 text-2xl text-orange">
                  ₫ {formatCurrency(totalCheckedPurchasePrice)}
                </div>
              </div>

              <div className="flex items-center text-sm sm:justify-end">
                <div className="text-gray-500">Tiết kiệm</div>
                <div className="ml-6 text-orange">
                  ₫ {formatCurrency(totalCheckedPurchaseSavingPrice)}
                </div>
              </div>
            </div>
            <Button
              className="mt-5 flex h-10 w-52 items-center justify-center bg-red-500 text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0"
              onClick={handleBuyPurchases}
              disabled={buyProductMutation.isPending}
            >
              Mua hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
