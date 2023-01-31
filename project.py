from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

from bs4 import BeautifulSoup
import requests
import time

from email.mime.multipart import  MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import smtplib


html_header_text = """
<html>
<head></head>
<body>
"""

html_footer_text = """
</body>
</html>
"""

r19 = ['cse-1btech2019@gvpce.ac.in','cse-2btech2019@gvpce.ac.in','cse-3btech2019@gvpce.ac.in','cse-4btech2019@gvpce.ac.in']
r20 = ['cse-1btech2020@gvpce.ac.in','cse-2btech2020@gvpce.ac.in','cse-3btech2020@gvpce.ac.in','cse-4btech2020@gvpce.ac.in']
r21 = ['cse-1btech2021@gvpce.ac.in','cse-2btech2021@gvpce.ac.in','cse-3btech2021@gvpce.ac.in','cse-4btech2021@gvpce.ac.in']
mails = {'R-2019':r19,'R-2020':r20,'R-2021':r21}

resultsWebsiteLink = "http://127.0.0.1:5500/GVPCE/GVPCE/gvpce.ac.in/result.html"
notificationsWebsiteLink = "http://127.0.0.1:5500/GVPCE/GVPCE/gvpce.ac.in/examnotifications.html"


def loadResultsFile():
    file_to_clear = open("results.txt",'w')
    file_to_clear.close()
    fs = open('results.txt','r+')
    html_text = requests.get(resultsWebsiteLink).text  # Replcae with the actual website link
    soup = BeautifulSoup(html_text, 'lxml')
    resultsField = soup.find('table', id='table4')
    for resultNotification in resultsField.find_all('tr'):
        if resultNotification.find('a')!=None:
            if resultNotification.find('a').find('font')!=None:
                notification = resultNotification.find('a').find('font').text
                res = " ".join(notification.split())
                fs.write(res)
                fs.write("\n")
    fs.close()


def loadNotificationsFile():
    file_to_clear = open("notifications.txt",'w')
    file_to_clear.close()
    fs = open('notifications.txt','r+')
    html_text = requests.get(notificationsWebsiteLink).text  # Replcae with the actual website link
    soup = BeautifulSoup(html_text, 'lxml')
    notificationsField = soup.find('table', id='table4')
    for notification in notificationsField.find_all('tr'):
        if notification.find('a')!=None:
            if notification.find('a').find('font')!=None:
                notice = notification.find('a').find('font').text
                res = " ".join(notice.split())
                fs.write(res)
                fs.write("\n")
    fs.close()

def send_email(receiver,title,content,payload=None):

    message = MIMEMultipart()
    message["from"] = "vamsimadugula7@gmail.com"
    message['to'] = receiver
    message["subject"] = title

    html_content = MIMEText(content, 'html')
    message.attach(html_content)

    if(payload!=None):
        message.attach(payload)

    with smtplib.SMTP(host="smtp.gmail.com",port=587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.login("vamsimadugula7@gmail.com","mlondbqtbravsnjp")
        smtp.send_message(message)
        print("Sent...")


def checkForResults():
    fs = open('results.txt','r+')
    html_text = requests.get(resultsWebsiteLink).text  # Replcae with the actual website link
    soup = BeautifulSoup(html_text, 'lxml')
    text = fs.read()
    resultsField = soup.find('table', id='table4')
    for resultNotification in resultsField.find_all('tr'):
        if resultNotification.find('a')!=None:
            if resultNotification.find('a').find('font')!=None:
                notification = resultNotification.find('a').find('font').text
                res = " ".join(notification.split())
                if res not in text:

                    fs.seek(0)
                    fs.write(res+'\n'+text)

                    resultLink = resultNotification.find('a')['href']

                    driver = webdriver.Chrome()
                    driver.get(resultLink)
                    rollNo = driver.find_element(By.XPATH,'//input[@name="input1"]')
                    submitBtn = driver.find_element(By.XPATH,'//input[@type="submit"]')
                    rollNo.send_keys("........")
                    submitBtn.click()

                    soup = BeautifulSoup(driver.page_source,'lxml')
                    results = soup.find_all('table')
                    for result in results:
                        if(result.tbody.tr.td.text == '20131A05A9' or result.tbody.tr.td.text == '20131A05C4'):
                            title = res
                            message = str(html_header_text) + str(result) + str(html_footer_text)
                            receiver = result.tbody.tr.td.text + '@gvpce.ac.in'
                            send_email(receiver,title,message)
    fs.close()

def checkForNotification():
    fs = open('notifications.txt','r+')
    html_text = requests.get(notificationsWebsiteLink).text  # Replcae with the actual website link
    soup = BeautifulSoup(html_text, 'lxml')
    text = fs.read()
    notificationsField = soup.find('table', id='table4')
    for notification in notificationsField.find_all('tr'):
        if notification.find('a')!=None:
            if notification.find('a').find('font')!=None:
                notice = notification.find('a').find('font').text
                res = " ".join(notice.split())
                if res not in text:
                    fs.seek(0)
                    fs.write(res+'\n'+text)
                    if notification.find('a')!=None:
                        if notification.find('a')['href']!=None:

                            link = notificationsWebsiteLink.split("/")
                            link.pop()
                            link = "/".join(link) + '/' + notification.find('a')['href']

                            pdfname = notification.find('a')['href'].replace('%20','')

                            res = [i for i in range(len(notice)) if notice.startswith('R-20', i)]

                            response = requests.get(link)
                            payload = MIMEBase('application', 'octate-stream', Name=pdfname)
                            payload.set_payload((response.content))
                            encoders.encode_base64(payload)
                            payload.add_header('Content-Decomposition', 'attachment', filename=pdfname)

                            receivers = []

                            for i in res:
                                if notice[i:i+6] in mails:
                                    receivers.append(mails[notice[i:i+6]]) if mails[notice[i:i+6]] not in receivers else None

                            recipients = sum(receivers,[])
                            recipients = ', '.join(recipients)
                            
                            print('Sent mail for : ',recipients)
                            
                            # send_email(recipients,'Notification',notice,payload)

                            send_email('20131a05c4@gvpce.ac.in','Notification',notice,payload)
                            
                            
    fs.close()

if __name__ == "__main__" :

    loadResultsFile()
    loadNotificationsFile()


    while True:

        checkForResults()
        checkForNotification()

        print("sleeping")
        time.sleep(10)


