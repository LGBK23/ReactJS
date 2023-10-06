function DoiMK()
{
    return(
        <>
         <div className="formDKDN">
    <div id="wrapper">
        <form action="DangNhap" id="form-login" method="get">
            <h1 class="form-heading">ĐỔI MẬT KHẨU</h1>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input type="text" class="form-input" name="TenTK" placeholder="Tên đăng nhập"/>
            </div>
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input type="password" class="form-input" name="MK" placeholder="Mật khẩu"/>
                <div id="eye">
                    <i class="far fa-eye"></i>
                </div>
            </div>
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input type="password" class="form-input" name="MKM" placeholder="Mật khẩu mới"/>
                <div id="eye">
                    <i class="far fa-eye"></i>
                </div>
            </div>
            <input type="submit" value="Xác nhận" class="form-submit"/>
            
        </form>
    </div>
     </div>
        </>
    );
}
export default DoiMK;