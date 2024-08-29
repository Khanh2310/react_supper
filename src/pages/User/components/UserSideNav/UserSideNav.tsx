import { Link } from 'react-router-dom';

export const UserSideNav = () => {
  return (
    <div>
      <div className="flex items-center border-b border-b-gray-200 py-4">
        <Link
          to="profile"
          className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-black/10"
        >
          <img
            src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </Link>
        <div className="flex-grow pl-4">
          <div className="mb-1 truncate font-semibold text-gray-600">
            ddddddddddddddddddddd
            <Link
              to="profile"
              className="flex items-center capitalize text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              Sửa hồ sơ
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <Link
          to="profile"
          className="flex items-center capitalize text-orange transition-colors"
        >
          <div className="mr-3 flex items-center text-xs capitalize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            Tài khoản của tôi
          </div>
        </Link>
      </div>
    </div>
  );
};
