import React from "react";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../../Components/Header/Header.NavBar";

export default function SignUp() {
    return (
        <div className="signup">
            <Navbar />

            <div class="container-fluid" id="registerContainer">
                <div class="row justify-content-center">

                    <div class="col m-5 ">
                        <div class="registerForm">
                            <h1>Đăng ký</h1>

                            <div class="row row-cols-2" >

                                <div class="col-5">
                                    <div class="card">
                                        <button class="btn btn-google btn-block">
                                            <FcGoogle /> Đăng ký với Google
                                        </button>
                                    </div>
                                </div>

                                <div class="col-3">
                                <form>
                                <div class="form-group mb-4">
                                    <input type="username" class="form-control" id="inputUsername"
                                        placeholder="Tên đăng nhập" />
                                </div>

                                <div class="form-group mb-4">
                                    <input type="password" class="form-control" id="inputPassword"
                                        placeholder="Mật khẩu" />
                                </div>

                                <div class="form-check mb-4">

                                    <label class="switch ">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>

                                    <label class="form-check-label" for="checkRemember">Ghi nhớ đăng nhập</label>

                                    <label class="forgot-password"><a href="/forgot-password">Quên mật khẩu?</a></label>

                                    <br />

                                    <label></label>
                                </div>

                                <button type="submit" class="btn btn-lg btn-block btn-success">Đăng nhập</button>
                                <br />
                                <label class="create-account mt-3">
                                    <span>Bạn đã có tài khoản?  </span> 
                                    <a href="/login"> Đăng nhập </a>
                                </label>
                            </form>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}