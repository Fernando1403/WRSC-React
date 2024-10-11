import { useState } from "react";
import emailjs from '@emailjs/browser'

function FormContato() {

    const [pessoa, SetPessoa] = useState('')
    const [empresa, SetEmpresa] = useState('')
    const [email, SetEmail] = useState('')
    const [telefone, SetTelefone] = useState('')
    const [assunto, SetAssunto] = useState('')
    const [cargo, SetCargo] = useState('')
    const [estado, SetEstado] = useState('')
    const [mensagem, SetMensagem] = useState('')

    function sendEmail(e){
        e.preventDefault();

        const templateParams = {
            from_name: pessoa,
            pessoa: pessoa,
            empresa: empresa,
            email: email,
            telefone: telefone,
            assunto: assunto,
            cargo: cargo,
            estado: estado,
            mensagem: mensagem
        }

        emailjs.send("service_srbkuso","template_6vesvh9", templateParams, "r5haNZZbpwNSoMdz1")
        .then((resposta) => {
            alert("Email enviado com sucesso!")
            SetPessoa('')
            SetEmpresa('')
            SetEmail('')
            SetTelefone('')
            SetAssunto('')
            SetCargo('')
            SetEstado('')
            SetMensagem('')
        }, (err) => {
            alert("Erro ao enviar", err)
        })
    }

    return ( 
        <>
            <div class="container-contato">
                <main class="content-contato">
                    <div class="conteudo-contato">
                        <div class="esquerda-contato">
                            <h3>Torne-se nosso parceiro e tenha profissionais mais qualificados. engajados e atenciosos em sua empresa</h3>
                            <p>Solicite um orçamento pelo formulário ao lado ou entre em contato conosco pelo numero (11) 98801-3288 ou pelo email contato@wrsc.com.br</p>
                        </div>
                        <div class="direita-contato">
                            <form action="" class="form-contato" onSubmit={sendEmail}>
                                <input type="text" placeholder="Pessoa" onChange={(e) => SetPessoa(e.target.value)} value={pessoa} required/>
                                <input type="text" placeholder="Empresa" onChange={(e) => SetEmpresa(e.target.value)} value={empresa} required/>
                                <input type="email" name="" id="" placeholder="Email" onChange={(e) => SetEmail(e.target.value)} value={email} required/>
                                <input type="text" name="" id="" placeholder="Telefone" onChange={(e) => SetTelefone(e.target.value)} value={telefone}/>
                                <select name="Assunto" id="" onChange={(e) => SetAssunto(e.target.value)} value={assunto} required>
                                    <option value="" disabled selected>Assunto</option>
                                    <option value="Gostaria de Conhecer Mais">Gostaria de Conhecer Mais</option>
                                    <option value="Proposta Comercial -  Setor Privado">Proposta Comercial -  Setor Privado</option>
                                    <option value="Proposta Comercial -   Setor Publico">Proposta Comercial -   Setor Publico</option>
                                    <option value="Tenho uma demanda Urgente de Dynamics 365">Tenho uma demanda Urgente de Dynamics 365</option>
                                    <option value="Tenho uma demanda Urgente de Ferramentas Microsoft">Tenho uma demanda Urgente de Ferramentas Microsoft</option>
                                    <option value="Vídeo Conferência - Sistemas e Empresa">Vídeo Conferência - Sistemas e Empresa</option>
                                    <option value="Outros Assuntos">Outros Assuntos</option>
                                </select>
                                <input type="text" placeholder="Cargo" onChange={(e) => SetCargo(e.target.value)} value={cargo}/>
                                <select name="Estado" id="" onChange={(e) => SetEstado(e.target.value)} value={estado}>
                                    <option value="" disabled selected>Selecione um estado</option>
                                    <option value="AC">Acre (AC)</option>
                                    <option value="AL">Alagoas (AL)</option>
                                    <option value="AP">Amapá (AP)</option>
                                    <option value="AM">Amazonas (AM)</option>
                                    <option value="BA">Bahia (BA)</option>
                                    <option value="CE">Ceará (CE)</option>
                                    <option value="DF">Distrito Federal (DF)</option>
                                    <option value="ES">Espírito Santo (ES)</option>
                                    <option value="GO">Goiás (GO)</option>
                                    <option value="MA">Maranhão (MA)</option>
                                    <option value="MT">Mato Grosso (MT)</option>
                                    <option value="MS">Mato Grosso do Sul (MS)</option>
                                    <option value="MG">Minas Gerais (MG)</option>
                                    <option value="PA">Pará (PA)</option>
                                    <option value="PB">Paraíba (PB)</option>
                                    <option value="PR">Paraná (PR)</option>
                                    <option value="PE">Pernambuco (PE)</option>
                                    <option value="PI">Piauí (PI)</option>
                                    <option value="RJ">Rio de Janeiro (RJ)</option>
                                    <option value="RN">Rio Grande do Norte (RN)</option>
                                    <option value="RS">Rio Grande do Sul (RS)</option>
                                    <option value="RO">Rondônia (RO)</option>
                                    <option value="RR">Roraima (RR)</option>
                                    <option value="SC">Santa Catarina (SC)</option>
                                    <option value="SP">São Paulo (SP)</option>
                                    <option value="SE">Sergipe (SE)</option>
                                    <option value="TO">Tocantins (TO)</option>
                                </select>
                                <textarea name="" id="" placeholder="Mensagem Livre" onChange={(e) => SetMensagem(e.target.value)} value={mensagem}></textarea>
                                <input type="submit" value="Enviar"/>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
     );
}

export default FormContato;