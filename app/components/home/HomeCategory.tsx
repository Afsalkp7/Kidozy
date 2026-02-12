import CategorySlider from "./CategorySlider";

export default function HomeCategory () {
    return (
        <>
        <div className="flex flex-col main-padding my-10 justify-center items-center text-center">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">Explore by Age</h2>
            <p className="text-[12px] md:text-[16px] lg:text-[18px] font-light">Everything they need for every milestone.</p>
        </div>
        <CategorySlider />
        </>
    )
}