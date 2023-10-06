import Header from "../components/header"

function Dang_nhap() {
    return (
        <>
            <Header />
            <div className="m-5">
                <section class="vh-80">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6 text-black mt-5">
                                <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                                    <form className="a" method="post" action="xl_dang_nhap">
                                        <h3 class="fw-normal mb-3 pb-3 b">Đăng nhập</h3>

                                        <div class="form-outline mb-4">

                                            <label class="form-label" for="user">Tài khoản</label>
                                            <input type="user" id="user" class="form-control form-control-lg" />
                                        </div>

                                        <div class="form-outline mb-4">

                                            <label class="form-label" for="pass">Mật khẩu</label>
                                            <input type="password" id="pass" class="form-control form-control-lg" />
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <button class="btn btn-info btn-lg btn-block" type="submit">Đăng nhập</button>
                                        </div>

                                    </form>

                                </div>

                            </div>
                            <div class="col-sm-6 px-0 d-inline-block d-sm-block">
                                <img src="img/categories/cat-3.jpg"
                                    alt="Login image" class="w-50 c" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Dang_nhap