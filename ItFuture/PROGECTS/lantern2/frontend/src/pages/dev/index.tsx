import { OpenModal } from '@/common/components/DevelopoperComponent/OpenModal';
import {DevNotification} from "@/common/components/DevelopoperComponent/DevNotification";

export default function Dev() {
  return (
    <div>
      <h1>ICON</h1>
      <div></div>
      <h1>Modal</h1>
      <div>
        <OpenModal />
      </div>
      <div>
        <DevNotification/>
      </div>
    </div>
  );
}
