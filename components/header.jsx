import {
  AlignJustify,
  BadgeCheck,
  ChevronRightIcon,
  EllipsisVertical,
  Headset,
  Search,
  ShoppingBag,
  Truck,
  User,
  User2,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";

const Header = () => {
  return (
    <>
      <div className="bg-black text-white font-quicksand flex items-center justify-between px-4">
        <div className="py-2">
          <p className="text-13px">
            Hotline:{" "}
            <span className="font-bold">0968 239 497 - 097 221 6881</span> * Tư
            vấn build PC: <span className="font-bold">0986552233</span> * Địa
            chỉ: CS1: <span className="font-bold">180D Thái Thịnh</span> CS2:{" "}
            <span className="font-bold">83-85 Thái Hà - Đống Đa - Hà Nội</span>{" "}
            CS3:{" "}
            <span className="font-bold">40 Đường Vĩnh Viễn - Q10 - TP.HCM</span>
          </p>
        </div>
        <div className="text-13px">Mua tại Shopee</div>
      </div>
      <div className="flex items-center py-4 bg-slate-200">
        <div className="flex-initial pl-5 pr-20">
          <a href="/">
            <img src="/logo.webp"></img>
          </a>
        </div>
        <div className="flex-auto">
          <form action="" className="">
            <div className="relative">
              <Input className="" placeholder="Tim kiem san pham..." />
              <div>
                <Button className="absolute w-20 right-0 top-0 h-8 m-1 text-muted-foreground">
                  <Search size={20} color="#ffffff" className="" />
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="flex-initial pl-20 pr-4 flex flex-row gap-6">
          <Popover>
            <PopoverTrigger>
              <div className="flex flex-row items-center text-left">
                <User2 size={32} color="#000000" className="mr-2" />
                <div>
                  <p>Dang nhap / Dang ky</p>
                  <p>Tai khoan cua toi</p>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <form className="flex flex-col items-center ">
                <div className="text-center">
                  <p>DANG NHAP TAI KHOAN</p>
                  <p>Nhap email va mat khau cua ban</p>
                </div>
                <div className="w-full">
                  <div className="my-4">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                  </div>
                  <div className="my-4">
                    <Label htmlFor="password">Your password</Label>
                    <Input id="password" type="password" />
                  </div>

                  <Button className="w-full">Dang nhap</Button>
                </div>
                <div className="w-full my-4 text-xs text-left">
                  <div className="flex flex-row">
                    <p>Khach hang moi?</p>
                    <a className="text-yellow-200 ml-2" href="/">
                      Tao tai khoan
                    </a>
                  </div>
                  <div className="flex flex-row">
                    <p>Quen mat khau?</p>
                    <a className="text-yellow-200 ml-2" href="/">
                      Khoi phuc mat khau
                    </a>
                  </div>
                </div>
              </form>
            </PopoverContent>
          </Popover>
          <div className="flex flex-row items-center">
            <div className="relative">
              <div className="absolute rounded-full bg-red-400 w-5 h-5 right-0 -top-1 text-center text-xs">
                <p className="leading-5 text-[12px]">0</p>
              </div>
              <ShoppingBag size={32} color="#000000" className="mr-2" />
            </div>

            <p>Gio hang</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 bg-slate-200">
        <div className="col-span-2 font-quicksand text-sm rounded-b-md bg-slate-200 ">
          <div className="flex flex-row items-center justify-center py-2 bg-white ">
            <AlignJustify size={20} />
            <span className="ml-2 text-base font-bold">DANH MỤC SẢN PHẨM</span>
          </div>

          <ul className="col-span-2 mx-auto relative ml-4 bg-white h-[430px] rounded-b-md shadow-md font-medium">
            <il className="group">
              <a
                href="/"
                className=" relative flex flex-row items-center justify-between py-2 px-5"
              >
                <span>PC - Máy tính chơi game , Làm việc</span>
                <ChevronRightIcon size={20} />
              </a>
              <div className="hidden absolute my-class bg-white h-full z-50 group-hover:block padding-l top-0 py-2 px-4 font-bold">
                <div className="grid grid-cols-4">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </il>
            <il className="">
              <a href="/" className="flex flex-row items-center p-2 px-5">
                <span>PC VĂN PHÒNG</span>
              </a>
            </il>
            <il className="">
              <a href="/" className="flex flex-row items-center p-2 px-5">
                <span>PC AMD GAMING</span>
              </a>
            </il>
            <il className="">
              <a href="/" className="flex flex-row items-center p-2 px-5">
                <span>PC GIẢ LẬP - ẢO HÓA</span>
              </a>
            </il>
            <il className="">
              <a href="/" className="flex flex-row items-center p-2 px-5">
                <span>PC MINI</span>
              </a>
            </il>
            <il className="group">
              <a
                href="/"
                className=" relative flex flex-row items-center justify-between  p-2 px-5"
              >
                <span>Linh kiện máy tính</span>
                <ChevronRightIcon size={15} />
              </a>
              <div className="hidden absolute my-class bg-white h-full z-50 group-hover:block padding-l top-0 py-2 px-4 font-bold">
                <div className="grid grid-cols-4">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </il>
            <il className="">
              <a href="/" className="flex flex-row items-center p-2 px-5">
                <span>Build PC theo nhu cầu</span>
              </a>
            </il>
            <il className="">
              <a href="/" className="flex flex-row items-center p-2 px-5">
                <span>Màn hình</span>
              </a>
            </il>
            <il className="group">
              <a
                href="/"
                className=" relative flex flex-row items-center justify-between p-2 px-5"
              >
                <span>Gaming Gear</span>
                <ChevronRightIcon size={15} />
              </a>
              <div className="hidden absolute my-class bg-white h-full z-50 group-hover:block padding-l top-0 py-2 px-4 font-bold">
                <div className="grid grid-cols-4">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </il>
            <il className="">
              <a href="/" className="flex flex-row items-center p-2 px-5">
                <span>Giá Treo Màn Hình</span>
              </a>
            </il>
          </ul>
        </div>

        <div className="col-span-8 bg-slate-200">
          <ul className="flex flex-row gap-4 bg-white p-2 font-quicksand text-13px ">
            <li className="flex flex-row ml-4 items-center">
              <BadgeCheck className="mr-1" />
              Đảm bảo chất lượng
            </li>
            <li className="flex flex-row items-center">
              <Truck className="mr-1" />
              Vận chuyển siêu tốc
            </li>
            <li className="flex flex-row items-center">
              <Headset className="mr-1" />
              Build PC: 0986552233
            </li>
          </ul>
          <div className="grid grid-cols-3 p-4 gap-4">
            <a href="/" className="col-span-2">
              <img src="./slide_1_img.jpg" className="rounded-md" />
            </a>
            <div className="col-span-1 ">
              <a href="/" className="">
                <img
                  src="./banner_top_1_img_large.webp"
                  className="rounded-md mb-4 h-32 w-full"
                />
              </a>
              <a href="/" className="">
                <img
                  src="./banner_top_2_img_large.webp"
                  className="rounded-md mb-4 h-32 w-full"
                />
              </a>
              <a href="/" className="">
                <img
                  src="./banner_top_3_img_large.jpg"
                  className="rounded-md h-32 w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
