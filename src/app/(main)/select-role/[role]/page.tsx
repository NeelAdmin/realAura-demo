import RoleInformation from "@/components/layout/RentalAura/RoleInformation";
import { RENTAL_ROLES } from "@/lib/constants";

export default async function Page({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const role = (await params).role;

  if (role !== RENTAL_ROLES.OWNER && role !== RENTAL_ROLES.TENANT) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-gray-500">Page not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <RoleInformation role={role} />
    </div>
  );
}
