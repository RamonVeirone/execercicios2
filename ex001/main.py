import requests
from bs4 import BeautifulSoup
import pandas as pd

def extrair_empresas(url):
    try:
        # Solicita a página web
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')

        # Ajuste os seletores conforme a estrutura do site
        empresas = []
        estados = soup.find_all('div', class_='estado-container')  # Ajuste conforme necessário

        for estado in estados:
            estado_nome = estado.find('h2').get_text(strip=True)
            empresas_estado = estado.find_all('div', class_='empresa-dados')

            for empresa in empresas_estado:
                nome = empresa.find('h3').get_text(strip=True)
                telefone = empresa.find('span', class_='telefone').get_text(strip=True)
                empresas.append({'Estado': estado_nome, 'Nome da Empresa': nome, 'Telefone': telefone})

        # Converte os dados para um DataFrame
        df = pd.DataFrame(empresas)

        # Exporta para Excel
        df.to_excel('empresas_por_estado.xlsx', index=False)
        print("Dados exportados para 'empresas_por_estado.xlsx' com sucesso.")

    except Exception as e:
        print(f"Ocorreu um erro: {e}")

# URL do site
url = 'https://www.transvias.com.br/transportadoras/estados/sao-paulo'
extrair_empresas(url)
