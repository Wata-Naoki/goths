import { useLazyQuery, useQuery } from "@apollo/client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../AuthContext";
import { auth } from "../../firebaseConfig";
import { GET_USER, GET_USER_BLOGS } from "../../queries";

export default function UserIcon() {
  const { user } = useAuthContext();

  const [excute, { data: userDate, loading: userLoading, error: userError }] =
    useLazyQuery(GET_USER, { variables: { email: user?.email } });
  useEffect(() => {
    if (user?.email) excute();
  }, [user]);
  const {
    data: blogData,
    error: blogError,
    loading: blogLoading,
  } = useQuery(GET_USER_BLOGS, { variables: { email: user?.email } });
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate("/authentication");
  };
  return (
    <div className="text-right ">
      <Menu as="div" className="relative z-20 inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none ">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="">
              <Link to={`/admin/blogs`}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-green-700 text-white" : "text-gray-900"
                      } group flex flex-col w-full rounded-md px-2 py-2 text-sm`}
                    >
                      <p
                        className={`${
                          active ? "bg-green-700 text-white" : "text-gray-500"
                        }`}
                      >
                        ユーザー名
                      </p>
                      <p>
                        {userDate?.User[0]?.name
                          ? userDate?.User[0]?.name
                          : user?.displayName}
                      </p>
                    </button>
                  )}
                </Menu.Item>
              </Link>
              <Link to="/mypage">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-green-700 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      マイページ
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
            <div className="">
              <Link to="/authentication">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-green-700 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={handleLogout}
                    >
                      ログアウト
                    </button>
                  )}
                </Menu.Item>
              </Link>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
