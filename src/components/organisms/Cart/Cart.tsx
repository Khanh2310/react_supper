import { Button } from '@/components/atoms/Button';
import { getPurchases } from '@/hook/useQueryPurchases';
import { PurchaseType, statusPurchase } from '@/types/purchase/type';
import { formatCurrency } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Quantity } from '../Quantity';
import { produce } from 'immer';

interface IExtendedPurchase extends PurchaseType {
  disabled: boolean;
  checked: boolean;
}
export const Cart = () => {
  const [extendedPurchase, setExtendedPurchase] = useState<IExtendedPurchase[]>(
    []
  );
  const { data: purchasesInCartData } = useQuery({
    queryKey: ['purchases', { status: statusPurchase.inCart }],
    queryFn: () =>
      getPurchases({
        status: -1,
      }),
  });
  const purChaseInCart = purchasesInCartData?.data.data;

  useEffect(() => {
    setExtendedPurchase(
      purChaseInCart?.map((purchase) => ({
        ...purchase,
        disabled: false,
        checked: false,
      })) || []
    );
  }, [purChaseInCart]);

  const handleChecked =
    (productIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setExtendedPurchase(
        produce((draft) => {
          draft[productIndex].checked = event.target.checked;
        })
      );
    };

  const isAllChecked = extendedPurchase?.every((purchase) => purchase.checked);

  const handleCheckAll = () => {
    setExtendedPurchase((prev) =>
      prev.map((purchase) => ({
        ...purchase,
        checked: !isAllChecked,
      }))
    );
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
                          <button className="bg-none text-black transition-colors hover:text-orange">
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
            <button className="mx-3 border-none bg-none">Xóa</button>
          </div>

          <div className="mt-5 flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center">
            <div className="">
              <div className="flex items-center sm:justify-end">
                <div className="">Tổng thanh toán ( 0 sản phẩm )</div>
                <div className="ml-2 text-2xl text-orange">₫123123</div>
              </div>

              <div className="flex items-center text-sm sm:justify-end">
                <div className="text-gray-500">Tiết kiệm</div>
                <div className="ml-6 text-orange">₫123123</div>
              </div>
            </div>
            <Button className="mt-5 flex h-10 w-52 items-center justify-center bg-red-500 text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0">
              Mua hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
