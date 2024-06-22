import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 py-8 px-16 gap-8 bg-blue-400 my-8">
        <div className="col-span-1 flex flex-col items-end">
          <span className="flex flex-row font-bold font-quicksand text-2xl text-white mb-2">
            <Send className="mr-2" />
            Đăng ký nhận bản tin
          </span>
          <span className="font-quicksand text-white">
            Đế nhận các thông tin mới từ Techgo cũng như các chương trình khuyến
            mãi
          </span>
        </div>
        <div className="col-span-1 w-full">
          <form action="" className="mt-2">
            <div className="relative ">
              <Mail className="absolute left-2 top-3" size={20} />
              <Input
                className="pl-8 h-12"
                placeholder="Vui long nhap email cua ban..."
              />
              <div>
                <Button className="absolute w-28 right-0 top-0 h-10 m-1 text-muted-foreground font-quicksand font-bold text-white">
                  DANG KY
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-4 pl-4 gap-8 mb-8">
        <div className="col-span-1 font-quicksand  flex flex-col">
          <span className="font-bold text-lg mb-4">Ve TTG</span>
          <span className="text-sm">
            Trang thương mại chính thức của Dũng CT - Trực Tiếp Game. Luôn tìm
            kiếm những sản phẩm vì game thủ.
          </span>
          <div className="flex flex-row mt-4">
            <a href="/" className="border rounded-sm p-2 mr-2">
              <Twitter size={18} />
            </a>
            <a href="/" className="border rounded-sm p-2 mr-2">
              <Facebook size={18} />
            </a>
            <a href="/" className="border rounded-sm p-2 mr-2">
              <Github size={18} />
            </a>
            <a href="/" className="border rounded-sm p-2 mr-2">
              <Youtube size={18} />
            </a>
            <a href="/" className="border rounded-sm p-2 mr-2">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        <div className="col-span-1 font-quicksand  flex flex-col">
          <span className="font-bold text-lg mb-4">Thong tin lien he</span>
          <span className="text-sm mb-2">
            <MapPin className="inline mr-2" size={16} />
            CS1: 180D Thái Thịnh - Đống Đa - HN CS2: 83 - 85 Thái Hà - Đống Đa -
            HN CS3: 40 đường Vĩnh Viễn - Q10 - TP.HCM
          </span>
          <span className="flex flex-row text-sm mb-2">
            <Phone size={16} className="mr-2" />
            0968 239 497 - 097 221 6881
          </span>
          <span className="flex flex-row text-sm mb-2">
            <Mail size={16} className="mr-2" />
            ttgshoponline@gmail.com
          </span>
        </div>
        <div className="col-span-1 font-quicksand  flex flex-col">
          <span className="font-bold text-lg mb-4">Tai khoan ngan hang</span>
          <span className="text-sm mb-2">Tai khoan ngan hang</span>
          <span className="text-sm mb-2">Tim kiem</span>
        </div>
        <div className="col-span-1 font-quicksand  flex flex-col">
          <span className="font-bold text-lg mb-4">Chinh sach bao mat</span>
          <span className="text-sm mb-2">Chinh sach bao mat</span>
          <span className="text-sm mb-2">Qui Định Bảo Hành</span>
          <span className="text-sm mb-2">Chính Sách Đổi Trả</span>
          <span className="text-sm mb-2">Phương thức thanh toán</span>
          <span className="text-sm mb-2">Điều khoản sử dụng</span>
        </div>
      </div>
      <div className="border w-full mb-4 border-gray-200"></div>
    </>
  );
};

export default Footer;
