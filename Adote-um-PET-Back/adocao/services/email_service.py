from django.core.mail import send_mail


def encaminha_email_adocao(adocao):
    assunto = f"Adoção de Pet {adocao.pet.nome}"
    descricao = (
        "Olá, é um prazer ter você como um de nossos preciosos usuários,"
        "garantimos que você é, ainda mais, precioso para nossos amigos pets.\n\n"
        f"Agradecemos a sua adoção no valor de {adocao.valor} direcionado ao pet {adocao.pet.nome }, esperamos que você seja um de nossos amigos."
    )

    remetente = "ecoleta.es@gmail.com"
    destinatario = [adocao.email]

    send_mail(
        subject=assunto,
        message=descricao,
        from_email=remetente,
        recipient_list=destinatario,
    )
