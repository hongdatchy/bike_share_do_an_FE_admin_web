import React from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "./js/api/CommonApi";
import { useEffect } from "react";



export function Login(props) {
    const navigate = useNavigate()
    useEffect(() => {
        $("#alert-login-fail").hide();
    }, []);

    
    const login = async () => {
        let formlogin = {
            email: $("#input-username").val(),
            password: $("#input-password").val(),
        };
        let rs = await apiLogin(formlogin);
        console.log(rs);
        if (rs.message === "success") {
            window.localStorage.setItem("token", rs.data);
            props.changeIslogin();
            navigate("/station");         
        } else {
            $("#alert-login-fail").show();
        }
    };

    return (
        <div className="main-content page-login">
           
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title text-center">
                                    <img
                                        src="../image/hongdatchy-logos_white.png"
                                        width="60"
                                        className="d-inline-block align-top"
                                        alt=""
                                    />
                                    <h3>Đăng nhập</h3>
                                </div>
                                <div className="form-login">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="input-username"
                                                placeholder="Nhập email"
                                            />
                                            <div className="invalid-feedback">Error!</div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Mật khẩu</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="input-password"
                                                placeholder="Nhập mật khẩu"
                                            />
                                            <div className="invalid-feedback">Error!</div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            id="btn-login"
                                            onClick={() => login()}
                                        >
                                            Đăng nhập
                                        </button>
                                        <div
                                            className="alert alert-primary"
                                            role="alert"
                                            id="alert-login-fail"
                                        >
                                            Tài khoản mật khẩu không đúng
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
