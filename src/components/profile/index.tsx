import Tabs from "../../core/components/tab";
import { In_TabItem } from "../../core/interfaces";
import ProfileOverview from "./profile-overview";

function Profile() {
  const tabs: In_TabItem[] = [
    { id: 1, content: <ProfileOverview />, title: "Overview" },
    { id: 2, content: "Portfolio", title: "Portfolio" },
    { id: 3, content: "Experience", title: "Experience" },
    { id: 4, content: "Media", title: "Media" },
  ];
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Profile;
