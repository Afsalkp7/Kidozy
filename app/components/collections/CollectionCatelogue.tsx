import React from "react";

const CatalogItem = ({
  image,
  title,
  category,
}: {
  image: string;
  title: string;
  category: string;
}) => (
  <div className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 ">
    <div className="aspect-[5/5] overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <button className="w-full bg-whatsapp text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="material-symbols-outlined text-xl">chat</span>
          Inquire on Instagram
        </button>
      </div>
    </div>
  </div>
);

const StyleCatalog = () => {
  const items = [
    {
      id: 1,
      title: "Summer Floral Cotton Set",
      category: "Newborn",
      image:
        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Denim Explorer Overalls",
      category: "Toddler",
      image:
        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Royal Party Silk Dress",
      category: "Party Wear",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Classic Linen Shirt",
      category: "Kids 5-12Y",
      image:
        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "Boho Chic Tunic",
      category: "Toddler",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Velvet Occasion Suit",
      category: "Party Wear",
      image:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      title: "Royal Party Silk Dress",
      category: "Party Wear",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      title: "Classic Linen Shirt",
      category: "Kids 5-12Y",
      image:
        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {items.map((item) => (
          <CatalogItem
            key={item.id}
            title={item.title}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default StyleCatalog;
