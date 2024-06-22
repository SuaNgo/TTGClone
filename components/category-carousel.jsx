import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Data = [
  {
    name: "PC HIỆU NĂNG GAMING CAO - RTX 4060 Pro Art - 12400F (Toàn bộ linh kiện All New - Bảo hành 36 tháng) - 4 Slot cuối cùng - 2 Hà Nội - 2 HCM",
    price: "18,980,000₫",
    discount: false,
  },
  {
    name: "Dell Alienware Aurora R10 Gaming Desktop (AMD Ryzen 9 5900 - 32GB RAM - 2TB PCIe SSD + 2TB HDD - AMD Radeon RX 6800 XT 16GB) - ALL NEW - Bảo hành 24 tháng Chính hãng Dell",
    price: "48,980,000₫",
    discount: true,
  },
  {
    name: "PC LÀM VIỆC ĐỒ HỌA HIỆU NĂNG CAO - BỀN BÌ I5 13500 - RTX 3060 TI (Toàn bộ linh kiện ALL NEW - Bảo hành 36 tháng)",
    price: "28,980,000₫",
    discount: true,
  },
  {
    name: "PC LÀM VIỆC ĐỒ HỌA HIỆU NĂNG CAO - BỀN BÌ I5 13500 - RTX 3060 TI (Toàn bộ linh kiện ALL NEW - Bảo hành 36 tháng)",
    price: "28,980,000₫",
    discount: true,
  },
  {
    name: "PC LÀM VIỆC ĐỒ HỌA HIỆU NĂNG CAO - BỀN BÌ I5 13500 - RTX 3060 TI (Toàn bộ linh kiện ALL NEW - Bảo hành 36 tháng)",
    price: "28,980,000₫",
    discount: true,
  },
  {
    name: "PC LÀM VIỆC ĐỒ HỌA HIỆU NĂNG CAO - BỀN BÌ I5 13500 - RTX 3060 TI (Toàn bộ linh kiện ALL NEW - Bảo hành 36 tháng)",
    price: "28,980,000₫",
    discount: true,
  },
  {
    name: "PC LÀM VIỆC ĐỒ HỌA HIỆU NĂNG CAO - BỀN BÌ I5 13500 - RTX 3060 TI (Toàn bộ linh kiện ALL NEW - Bảo hành 36 tháng)",
    price: "28,980,000₫",
    discount: true,
  },
  {
    name: "PC LÀM VIỆC ĐỒ HỌA HIỆU NĂNG CAO - BỀN BÌ I5 13500 - RTX 3060 TI (Toàn bộ linh kiện ALL NEW - Bảo hành 36 tháng)",
    price: "28,980,000₫",
    discount: true,
  },
  {
    name: "PC LÀM VIỆC ĐỒ HỌA HIỆU NĂNG CAO - BỀN BÌ I5 13500 - RTX 3060 TI (Toàn bộ linh kiện ALL NEW - Bảo hành 36 tháng)",
    price: "28,980,000₫",
    discount: true,
  },
  {
    name: "PC LÀM VIỆC ĐỒ HỌA HIỆU NĂNG CAO - BỀN BÌ I5 13500 - RTX 3060 TI (Toàn bộ linh kiện ALL NEW - Bảo hành 36 tháng)",
    price: "28,980,000₫",
    discount: true,
  },
];
const CategoryCarousel = () => {
  return (
    <>
      <div className="bg-slate-200 p-4">
        <div className="px-6 py-4 bg-red-700 rounded-lg">
          <Carousel className="w-full ">
            <div className="flex flex-row justify-between mb-4">
              <span className="font-quicksand text-2xl font-bold text-white flex flex-row items-center ml-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-dotping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-100"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                ⚡️ KHUYẾN MẠI SHOCK NHẤT 🔥
              </span>
              <div className="grid grid-cols-2 gap-2">
                <CarouselPrevious className="" />
                <CarouselNext className="" />
              </div>
            </div>
            <CarouselContent className="-ml-1">
              {Data.map((d, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/5"
                >
                  <Card>
                    <CardContent className="pt-14 pb-10 px-1">
                      <img src="./img_test1.webp" />
                    </CardContent>
                    <CardFooter className="px-4 flex flex-col items-start">
                      <a href="/">
                        <span className="font-quicksand text-sm display-2line block w-[200px] h-10 font-medium">
                          {d.name}
                        </span>
                      </a>
                      <div className="my-4 flex flex-row justify-between w-full items-center h-12">
                        <div className="flex flex-col">
                          {d.discount ? (
                            <>
                              <span className="font-quicksand text-sm font-semibold text-red-700">
                                18,980,000₫
                              </span>
                              <span className="font-quicksand text-xs line-through">
                                {d.price}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="font-quicksand text-sm font-semibold ">
                                {d.price}
                              </span>
                            </>
                          )}
                        </div>

                        <span className="bg-red-600 font-medium text-xs font-quicksand text-white py-[2px] h-fit px-1 rounded-sm">
                          -21%
                        </span>
                      </div>

                      <Button className="rounded-full hover:bg-blue-500 bg-blue-500 w-8 hover:w-36 transition-all ease duration-500 py-4 px-2 h-0 group relative flex justify-start">
                        <ShoppingBag
                          size={16}
                          color="#ffffff"
                          className="group-hover:translate-x-2 transition-all ease duration-500"
                        />

                        <span className="font-semibold text-xs font-quicksand text-black group-hover:text-white absolute left-10 uppercase">
                          Thêm vào giỏ
                        </span>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <a href="/" className="flex flex-row justify-center">
            <span className="font-quicksand text-sm text-black font-medium px-4 py-2 mt-4 bg-white rounded-sm w-fit">
              Xem tất cả⚡️ KHUYẾN MẠI SHOCK NHẤT 🔥
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default CategoryCarousel;
