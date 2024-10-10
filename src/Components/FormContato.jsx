function FormContato() {
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
                            <form action="" class="form-contato">
                                <input type="text" placeholder="Pessoa"/>
                                <input type="text" placeholder="Empresa"/>
                                <input type="email" name="" id="" placeholder="Email"/>
                                <input type="text" name="" id="" placeholder="Telefone"/>
                                <select name="Assunto" id="">
                                    <option value="" disabled selected>Assunto</option>
                                    <option value="">Gostaria de Conhecer Mais</option>
                                    <option value="">Proposta Comercial -  Setor Privado</option>
                                    <option value="">Proposta Comercial -   Setor Publico</option>
                                    <option value="">Tenho uma demanda Urgente de Dynamics 365</option>
                                    <option value="">Tenho uma demanda Urgente de Ferramentas Microsoft</option>
                                    <option value="">Vídeo Conferência - Sistemas e Empresa</option>
                                    <option value="">Outros Assuntos</option>
                                </select>
                                <input type="text" placeholder="Cargo"/>
                                <select name="Estado" id="">
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
                                <textarea name="" id="" placeholder="Mensagem Livre"></textarea>
                                <input type="button" value="Enviar"/>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
     );
}

export default FormContato;