import { Header } from "../../components/header/SearchHeader";
import { UserForm } from "../../components/userForm/UserForm";

export const Mypage = () => {
  const month = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="my-10 text-center">記事作成履歴</div>

      <div className="flex justify-center">
        <div className="flex flex-col w-3/5">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y ">
                  <tbody className="font-normal bg-white divide-y divide-gray-00">
                    <th className="py-2 font-normal text-gray-400 bg-gray-100">
                      1月
                    </th>
                    {month.map((x: any, index) => (
                      <th className="py-2 font-normal text-gray-400 bg-gray-100 whitespace-nowrap">
                        {x}
                      </th>
                    ))}

                    <tr>
                      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(
                        (x: any, index) => (
                          <td className="px-6 py-4 ">
                            <div key={index} className="flex justify-center">
                              <h2>{x}</h2>
                            </div>
                          </td>
                        )
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 mb-10 text-2xl text-center">ユーザー設定</div>

      <div className="">
        <UserForm />
      </div>
    </>
  );
};
