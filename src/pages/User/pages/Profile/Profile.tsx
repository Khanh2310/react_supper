import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { InputWithNumber } from '@/components/molecules/InputWithNumber';
import { profileSchema, profileSchemaInput } from '@/schema/profile/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { DateSelect } from '../../components/DateSelect';
import { toast } from 'react-toastify';
import { setProfile } from '@/hook/useQueryUser';
import { getProfile, updateProfile } from '@/hook/useQueryProfile';

type FormData = Pick<
  profileSchemaInput,
  'name' | 'address' | 'phone' | 'avatar' | 'date_of_birth'
>;

export const Profile = () => {
  const { data: profileData, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });
  const profile = profileData?.data.data;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFormLocal = event.target.files?.[0];
    setFile(fileFormLocal);
  };
  const [file, setFile] = useState<File>();

  const preview = useMemo(() => {
    return file ? URL.createObjectURL(file) : '';
  }, [file]);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      avatar: '',
      date_of_birth: new Date(1990, 0, 1),
    },
    resolver: zodResolver(profileSchema),
  });
  const avatar = watch('avatar');

  useEffect(() => {
    if (profile) {
      setValue('name', profile.name ? profile.name : '');
      setValue('address', profile.address ? profile.address : '');
      setValue('phone', profile.phone ? profile.phone : '');
      setValue('avatar', profile.avatar ? profile.avatar : '');
      setValue(
        'date_of_birth',
        profile.date_of_birth
          ? new Date(profile.date_of_birth)
          : new Date(199, 0, 1)
      );
    }
  }, [profile, setValue]);

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await updateProfileMutation.mutateAsync({
      ...data,
      date_of_birth: data.date_of_birth?.toISOString(),
    });
    setProfile(res.data.data);
    refetch();
    toast.success('Cập nhật thông tin thành công');
  });

  return (
    <div className="rounded-sm bg-white px-2 md:px-7 pb-10 md:pb-20 shadow">
      <div className="border-b border-gray-200 py-6">
        <h1 className="text-lg font-medium capitalize text-gray-900">
          Hồ sơ của tôi
        </h1>
        <div className="mt-1 text-sm text-gray-700">
          Quản lý thông tin hồ sở để bảo mật tài khoản
        </div>
        <form
          className="mt-8 flex flex-col-reverse md:flex-row md:items-start"
          onSubmit={onSubmit}
        >
          <div className="mt-6 flex-grow md:pr-12 md:mt-0">
            <div className="mt-6 flex flex-wrap">
              <div className="sm:w-[20%] truncate pt-2 text-right capitalize">
                Tên
              </div>
              <div className="w-[80%] pl-5">
                <Input
                  className="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  register={register}
                  name="name"
                  placeholder="Tên"
                  errorMessage={errors.name?.message}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="sm:w-[20%] truncate text-right capitalize">
                Email
              </div>
              <div className="sm:w-[80%] pl-5">
                <div className="text-blue-900 cursor-pointer">
                  {profile?.email}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap">
              <div className="w-[20%] truncate pt-2 text-right capitalize">
                Số điện thoại
              </div>
              <div className="w-[80%] pl-5">
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <InputWithNumber
                      className="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                      placeholder="Số điện thoại"
                      {...field}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap">
              <div className="sm:w-[20%] truncate pt-2 text-right capitalize">
                Địa chỉ
              </div>
              <div className="sm:w-[80%] pl-5">
                <Input
                  className="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm"
                  register={register}
                  name="address"
                  placeholder="Địa chỉ"
                  errorMessage={errors.address?.message}
                />
              </div>
            </div>

            <Controller
              control={control}
              name="date_of_birth"
              render={({ field }) => (
                <DateSelect
                  errorMessage={errors.date_of_birth?.message}
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />

            <div className="mt-7 flex flex-col flex-wrap sm:flex-row justify-end">
              <div className="sm:w[20%] truncate pt-3 text-right capitalize" />
              <div className="sm:w-[80%] pl-5">
                <Button
                  className="flex items-center h-9 bg-orange px-5 text-center text-sm text-white hover:bg-orange/80"
                  type="submit"
                >
                  Lưu
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:w-72 md:border-l md:border-l-gray-200">
            <div className="flex flex-col items-center">
              <div className="my-5 h-24 w-24">
                <img
                  src={avatar || preview}
                  alt="avatar_default"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                className="hidden"
                ref={fileInputRef}
                onChange={onFileChange}
              />
              <button
                className="flex h-10 items-center justify-end rounded-sm border bg-white px-6 text-sm text-gray-600 shadow-sm"
                type="button"
                onClick={handleUpload}
              >
                Chọn Ảnh
              </button>
              <div className="mt-3 text-gray-400">
                Dung lượng file tối đa 1 MB
              </div>
              <div>Định dạng: JPEG, .PNG</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
