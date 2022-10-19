import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_BLOG_EDITORS } from "../../queries/queries";
import { GetBlogEditorsQuery } from "../../types/generated/graphql.tsx/graphql";
import DeleteTableUsers from "../deleteTableUsers/DeleteTableUsers";


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
  // console.log(data);

  const { id } = useParams();
  const { data, loading, error } = useQuery<GetBlogEditorsQuery>(
    GET_BLOG_EDITORS,
    {
      variables: { blog_id: id },
    }
  );
  console.log(data);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y ">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    名前
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    メールアドレス
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {data?.User.map((u: any) => (
                  <tr key={u.id}>
                    <td className="pl-6 pr-14 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {u.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{u.email}</div>
                    </td>

                    <td className="pr-6 py-4 whitespace-nowrap text-red-500">
                      <div>{<DeleteTableUsers id={u.id} />}</div>
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
