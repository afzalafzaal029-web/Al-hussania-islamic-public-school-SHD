import SchoolMap from "@/app/Components/SchoolMap";
import WhatsAppContact from "../Components/WhatsAppContact";
export default function page() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-2">Hum Se Rabta Karein</h1>
      <p className="text-center text-gray-500 mb-10">Aapka sawal, humara jawab — WhatsApp per</p>
      <WhatsAppContact />
      <SchoolMap />
    </div>
  );
}
