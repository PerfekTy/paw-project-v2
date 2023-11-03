import { useUsers } from "../../hooks/useUsers";
import FollowItem from "./follow-item.tsx";
import { ArrowDownWideNarrow } from "lucide-react";
import { useCurrentUser } from "../../hooks/useCurrentUser.ts";

const FollowBar = () => {
  const { users = [], isLoading } = useUsers();
  const { userId } = useCurrentUser();

  const filteredUsers = users?.filter(
    (user: Record<string, any>) => user?.username !== userId,
  );

  return (
    <div className="rounded-lg p-2 dark:bg-navbar min-w-[300px] max:w-1/3 h-fit m-2 hidden xl:block dark:border-none border border-black border-opacity-20">
      <span className="dark:text-white">
        <p className="flex items-center justify-center gap-2 my-2 text-lg">
          People you might know <ArrowDownWideNarrow size={20} />
        </p>
      </span>
      {!isLoading ? (
        filteredUsers?.map((user: Record<any, any>, key: number) => (
          <FollowItem key={key} user={user} />
        ))
      ) : (
        <div className="grid place-items-center rotate">
          <img
            src="/images/favicon.png"
            width={70}
            alt="minecraft favicon spinner"
          />
        </div>
      )}
    </div>
  );
};

export default FollowBar;
