function Thanhtoan() {
    return (
        <>
            <div class="table-responsive">
                <table class="table table-striped
                table-hover	
                table-borderless
                table-dark
                align-middle">
                    <thead class="table-success">
                        <caption className="fw-bold fs-3">DANH SÁCH SẢN PHẨM</caption>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>Tùy chỉnh</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr class="table-light" >
                            <td scope="row">
                                Tên sp
                                {/* <span>
                                        <img src="img/categories/cat-1.jpg" class="img-thumbnail rounded float-start" alt=""/>
                                    </span> */}
                            </td>
                            <td>Item</td>
                            <td>Item</td>
                            <td>Item</td>
                            <td>
                                <a name="" id="" class="btn btn-warning" href="#" role="button">Sửa</a>  | <a name="" id="" class="btn btn-danger" href="#" role="button">Xóa</a>
                            </td>
                        </tr>

                        <tr class="table-light" >
                            <td scope="row">
                                Tên sp
                                {/* <span>
                                        <img src="img/categories/cat-1.jpg" class="img-thumbnail rounded float-start" alt=""/>
                                    </span> */}
                            </td>
                            <td>Item</td>
                            <td>Item</td>
                            <td>Item</td>
                            <td>
                                <a name="" id="" class="btn btn-warning" href="#" role="button">Sửa</a>  | <a name="" id="" class="btn btn-danger" href="#" role="button">Xóa</a>
                            </td>
                        </tr>
                        <tr class="table-light" >
                            <td scope="row">
                                Tên sp
                                {/* <span>
                                        <img src="img/categories/cat-1.jpg" class="img-thumbnail rounded float-start" alt=""/>
                                    </span> */}
                            </td>
                            <td>Item</td>
                            <td>Item</td>
                            <td>Item</td>
                            <td>
                                <a name="" id="" class="btn btn-warning" href="#" role="button">Sửa</a>  | <a name="" id="" class="btn btn-danger" href="#" role="button">Xóa</a>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
                <div className="w-100">
                    <div className="w-50 float-left">
                        <h5>Thông tin người nhận</h5>
                        <ul>
                            <li>Họ tên:</li>
                            <li>Điện thoại:</li>
                            <li>Địa chỉ:</li>
                        </ul>
                    </div>
                    <div className="w-50 float-right">
                        <h5>Hình thức thanh toán</h5>
                        <ul>
                            <li>COD:</li>
                            <li>Ngân hàng:</li>
                            <li>Momo:</li>
                        </ul>
                    </div>
                </div>

                <a name="" id="" class="btn btn-success text-right d-block float-end px-5" href="/thanh_toan" role="button">Thanh toán</a>
            </div>
        </>
    )
}
export default Thanhtoan