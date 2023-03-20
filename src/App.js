import { useForm } from "react-hook-form";
import React, { useState } from "react";

import "./App.css";

import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function createUser(data) {
    console.log(data);
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="container">
      <div className="img-box">
        <img src="img.png" alt="imagem" />
      </div>

      <div className="login-box">
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="box">
          <div className="intro">
            <h1>Acesse a plataforma</h1>
            <p>
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje.
            </p>
          </div>
          <form className="login" onSubmit={handleSubmit(createUser)}>
            <div className="campo">
              <label for="username">E-mail</label>
              <input
                className={errors?.email && "input-error"}
                type="email"
                placeholder="Digite seu e-mail"
                name="username"
                {...register("email", { required: true })}
              ></input>
              {errors?.email?.type === "required" && (
                <span className="error-message">Campo Obrigatório</span>
              )}
            </div>

            <div className="campo">
              <label for="password">Senha</label>
              <div class="eyes-box">
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <BsEyeSlashFill className="icon" />
                  ) : (
                    <IoEyeSharp className="icon" />
                  )}
                </button>

                <input
                  className={errors?.password && "input-error"}
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  name="password"
                  {...register("password", { required: true })}
                ></input>
              </div>
              {errors?.password?.type === "required" && (
                <span className="error-message">Campo Obrigatório</span>
              )}
            </div>

            <a href="/">
              <button>Entrar</button>
            </a>

            <p>
              Ainda não tem uma conta? <a href="/">Inscreva-se</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
