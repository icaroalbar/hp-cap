import { TextError } from "../styles/components/TextError";
import { IValuesSend } from "../styles/components/@types";
import { Textarea } from "../styles/components/TextArea";
import { ToastContainer, toast } from "react-toastify";
import { Select } from "../styles/components/Select";
import { Button } from "../styles/components/Button";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Input } from "../styles/components/Input";
import { Footer } from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Nav } from "../components/Nav";
import { Helmet } from "react-helmet";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      image: "Hp",
      company: "HP Capital",
      site: "hpcap",
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: IValuesSend) => {
    setLoading(true);

    const uuid = uuidv4().replace(/[-]/g, "");
    const uuidUppercase = uuid.toUpperCase();
    data.id = uuidUppercase;

    try {
      // await axios({
      //   method: "post",
      //   url: "https://fmdtbztec6.execute-api.us-east-1.amazonaws.com/default/SendMail",
      //   data: data,
      // });
      // await axios({
      //   method: "post",
      //   url: "./api/botTelegram",
      //   data: data,
      // });
      setLoading(false);
      reset();
      toast.success("Mensagem enviada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Ocorreu um erro!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="bg-zinc-300">
      <Helmet>
        <title>Contato</title>s
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nav />
      <ToastContainer />
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex items-center justify-center">
          <div className="w-8/12 m-4 flex gap-5 items-center text-xl font-medium text-white rounded-lg bg-primary-10 p-4 shadow-lg">
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-3">
                <FaWhatsapp className="text-3xl" />
                <h2>WhatsApp</h2>
              </div>
              <h3 className="border-b-2 border-secondary-20 pb-3">
                +55 21 4040-4148
              </h3>
              <div className="flex flex-col justify-center gap-5">
                <p className="text-sm text-justify">
                  Converse conosco pelo WhatsApp. É só apontar a câmera do seu
                  celular para o QR code ao lado.
                </p>
                <img
                  src="assets/images/qr-code.png"
                  alt="Código QR Code"
                  width={300}
                  className="mx-auto"
                />
              </div>
              <a
                className="text-sm text-justify flex gap-x-2 items-center hover:text-secondary-20 duration-150 ease-in-out"
                href="#!"
              >
                Ou clique aqui{" "}
                <RiArrowRightUpFill className="font-bold text-2xl text-secondary-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 p-16">
          <h1 className="font-semibold text-primary-10 text-3xl pb-5">
            Fale conosco
          </h1>
          <h4 className="text-xl">
            Estamos dispostos a sanar quaisquer dúvidas que possam surgir. Caso
            queira falar conosco, basta preencher o formulário ao lado ou entrar
            em contato conosco através de nosso WhatsApp.
          </h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 mt-1"
          >
            <Input
              errors={errors}
              register={register}
              rules={{ required: "Insira seu nome." }}
              name="name"
              placeholder="Escreva seu nome"
            />
            {errors.name && <TextError text="Insira seu nome." />}
            <Input
              className="col-span-1"
              errors={errors}
              register={register}
              rules={{ required: "Insira seu e-mail." }}
              name="email"
              type="email"
              placeholder="Escreva seu e-mail"
            />
            {errors.email && <TextError text="Insira seu e-mail." />}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 md:col-span-1">
                <Input
                  className="flex flex-col"
                  errors={errors}
                  register={register}
                  rules={{ required: "Insira seu celular." }}
                  name="phone"
                  placeholder="Insira seu telefone"
                  type="number"
                />
                {errors.phone && <TextError text="Insira seu telefone." />}
              </div>
              <div className="col-span-2 md:col-span-1">
                <Select
                  name="subject"
                  errors={errors}
                  register={register}
                  placeholder="Escolha um assunto"
                  defaultValue="2"
                  rules={{ required: "Insira seu assunto." }}
                >
                  <option value="Comercial">Comercial</option>
                  <option value="Elogio">Elogio</option>
                  <option value="Reclamações">Reclamações</option>
                  <option value="Dúvidas">Dúvidas</option>
                  <option value="Sugestões">Sugestões</option>
                </Select>
                {errors.subject && <TextError text="Insira um assunto." />}
              </div>
            </div>
            <Textarea
              placeholder="Escreva aqui..."
              register={register}
              name="message"
              errors={errors}
              rules={{ required: "Escreva sua mensagem" }}
            />
            {errors.message && <TextError text="Escreva sua mensagem." />}
            <Button
              isLoading={loading}
              color="bg-primary-10"
              hover="hover:bg-primary-20"
              value="enviar"
              className="mt-0"
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
