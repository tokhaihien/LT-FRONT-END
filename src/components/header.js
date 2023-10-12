import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <header class="header">
                <div class="header__top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="header__top__left">
                                    <ul>
                                        <li><i class="fa fa-envelope"></i> khaihienprivate@gmail.com</li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="header__top__right">
                                    <div class="header__top__right__social">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                        <a href="#"><i class="fa fa-pinterest-p"></i></a>
                                    </div>

                                    <div class="header__top__right__auth mx-3">
                                        <a href="/dang_ky"><i class="fa fa-user"></i> Đăng ký</a>
                                        
                                    </div>
                                    <div class="header__top__right__auth mx-3">
                                        <a href="/dang_nhap"><i class="fa fa-user"></i> Đăng nhập</a>
                                        
                                    </div>

                                    <div class="header__top__right__language">
                                    <i class="fa fa-user mx-2"/>
                                            <div>Tài khoản</div>
                                            <span class="arrow_carrot-down"></span>
                                            <ul>
                                                <li><a href="#">Quản lý tài khoản</a></li>
                                                <li><a href="#">Quản lý đơn hàng</a></li>
                                                <li><a href="#">Đổi mật khẩu</a></li>
                                                <li><a href="#">Đăn xuất</a></li>
                                            </ul>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="header__logo">
                                <a href="/"><img src="img/logo.png" alt="LOGO" /></a>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <nav class="header__menu">
                                <ul>
                                    <li className="active"><NavLink to="/">Trang chủ</NavLink></li>
                                    <li><NavLink to="/list_all">Sản phẩm</NavLink></li>
                                    {/* <li><li><NavLink to="#">Loại sản phẩm</NavLink></li>
                                        <ul class="header__menu__dropdown">
                                            <li><a href="/product_type">Loại sản phẩm 1</a></li>
                                            <li><a href="#">Loại sản phẩm 2</a></li>
                                            <li><a href="#">Loại sản phẩm 3</a></li>
                                            <li><a href="#">Loại sản phẩm 4</a></li>
                                        </ul>
                                    </li> */}
                                    <li><a href="#">Về chúng tôi</a></li>
                                    <li><a href="#">Tin tức</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-lg-2">
                            <div class="header__cart">
                                <ul>
                                    {/* <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li> */}
                                    <li><a href="/gio_hang"><i class="fa fa-shopping-bag"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="humberger__open">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header