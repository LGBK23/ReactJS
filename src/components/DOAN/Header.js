import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <div class="head row">
                <div className="bodyhead row">
                    <div class="baavatar col-sm-3">

                        <img class='avatar' src={"Hinhxe03.png"} alt=""></img>

                    </div>
                    <div class="batimkiem col-sm-6  ">

                        <span class="icon"><i class="fa fa-search"></i></span>
                        <input class="timkiem" type="search" id="search" placeholder="Nhập tên sản phẩm" />

                    </div>
                    <div class="dkdn col-sm-3">
                        <a href="#">Đăng ký</a><a href="#">/</a><a href="#">Đăng nhập</a>
                    </div>
                </div>

                <div class="menu">
                    <a href="#" class="menucon"></a>
                    <NavLink to='/' className="menucon">TRANG CHỦ</NavLink>
                    <a href="" class="menucon">|</a>
                    <NavLink to='/chi-tiet' className="menucon">VỀ CHÚNG TÔI</NavLink>

                    <a href="#" class="menucon">|</a>
                    <a href="#" class="menucon">SẢN PHẨM</a>
                    <a href="#" class="menucon">|</a>
                    <a href="#" class="menucon">TIN TỨC</a>
                    <a href="#" class="menucon">|</a>
                    <a href="#" class="menucon">LIÊN HỆ</a>
                    <a href="#" class="menucon"></a>

                </div>
            </div>


        </>
    );
}
export default Header;