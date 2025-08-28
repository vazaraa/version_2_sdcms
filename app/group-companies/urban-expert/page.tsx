import Image from "next/image";

export default function UrbanExpert() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image
            src="/images/companies/urbanexpert.jpg"
            alt="Urban Expert"
            width={400}
            height={400}
            className="rounded-lg shadow-lg w-full h-60 object-contain"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">Urban Expert</h1>
            <p className="text-2xl mb-2">Urban Services Platform</p>
            <p className="mb-4">
              Urban Expert, our newest venture established in 2023, is an innovative urban services platform that serves as your all-in-one solution for urban living. We connect residents with essential services and experiences, making city life more convenient and accessible.
            </p>
            <span className="inline-block bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium shadow mb-2">
              Est. 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 