import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_BLOG_EDITORS } from "../../queries";
import { GetBlogEditorsQuery } from "../../types/generated/graphql.tsx/graphql";
import { DeleteTableUsers } from "../deleteTableUsers/DeleteTableUsers";

import { Loading } from "../loading/Loading";
import { SectionLoading } from "../loading/SectionLoading";

// const ADMIN_TABLE_USERS_QUERY = gql`
//   query adminTableUsers {
//     adminTableUsers {
//       mockTableUsers {
//         mockMyBlogs {
//           id
//         }
//         id
//         name
//         email
//         delete
//       }
//     }
//   }
// `;

// const DELETE_EDITOR = gql`
//   mutation DeleteEditor($id: ID!) {
//     DeleteEditor(id: $id) {
//       mockTableUsers {
//         id
//       }
//     }
//   }
// `;

export const UserTable1 = () => {
  // const { loading, error, data } = useQuery(ADMIN_TABLE_USERS_QUERY);

  const { id } = useParams();
  const [execute, { data, loading, error, refetch }] =
    useLazyQuery<GetBlogEditorsQuery>(GET_BLOG_EDITORS, {
      variables: { blog_id: id },
    });

  useEffect(() => {
    execute();
    console.log("data", data?.User.length);
  }, [id]);

  if (loading) return <SectionLoading />;

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y ">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-10 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    名前
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    メールアドレス
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  ></th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {data?.User?.map((user: any) => (
                  <tr key={user.id}>
                    <td className="py-4 pl-6 pr-14 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user?.email}</div>
                    </td>

                    <td className="py-4 pr-6 text-red-500 whitespace-nowrap">
                      <div>
                        <DeleteTableUsers
                          id={user.id}
                          refetch={refetch}
                          dataCount={data?.User?.length}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
