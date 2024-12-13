import { TimeDisplay } from "./TimeComponent";

export const DashboardPostHeader = ({ page, role, company }: { page: string, role: string, company: string }) => {
  return (
    <div className="py-6 flex justify-between flex-row">
      <div>
        <p className="capitalize font-semibold text-2xl">{page}</p>
        <p className="text-secondary-100 text-xs">{role} from {company}</p>
      </div>
      <div>
        <TimeDisplay />
      </div>
    </div>
  );
}