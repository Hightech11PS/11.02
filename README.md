[README.md](https://github.com/user-attachments/files/30744850/README.md)
# Credits to Sistr0 for portage
- [ps4](https://hightechps.github.io/ps4)
- [ps5](https://hightechps.io/ps5)
- [etahen 5.05 devkit](https://zecoxao.github.io/ETAHEN)
- [FTP 5.05 devkit](https://zecoxao.github.io/FTP)
[index.html](https://github.com/user-attachments/files/30744860/index.html)
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HIGH TECH PS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #121212;
            color: #ffffff;
            margin: 0;
            padding: 20px;
            text-align: center;
        }
        header img {
            max-width: 150px;
            height: auto;
        }
        h1 {
            color: #00d4ff;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
        }
        .section {
            background-color: #1e1e1e;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid #333;
        }
        .section h3 {
            margin-top: 0;
            color: #ffb703;
        }
        .section span {
            font-size: 0.8em;
            background: #333;
            padding: 3px 8px;
            border-radius: 4px;
        }
        .links {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
        }
        .links a {
            background-color: #005f73;
            color: white;
            padding: 10px 15px;
            text-decoration: none;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: 0.3s;
        }
        .links a:hover {
            background-color: #0a9396;
        }
        .services {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 15px;
        }
        .service-box {
            background: #2b2b2b;
            padding: 15px;
            border-radius: 8px;
            flex: 1;
            min-width: 200px;
        }
        footer {
            margin-top: 30px;
            font-size: 0.9em;
            color: #888;
        }
    </style>
</head>
<body>

    <header>
        <div>
            <img alt="HIGH TECH PS Logo" src="logo.png">
        </div>
        <h1>HIGH TECH PS</h1>
        <p>مركز صيانة، بيع، شراء وتعديل أجهزة البلايستيشن</p>
    </header>

    <div class="container">
        
        <!-- Firmware 5.05 -->
        <div class="section">
            <h3>Firmware 5.05 <span>GoldHEN Ready</span></h3>
            <div class="links">
                <a href="./payloads/505/goldhen.bin">
                    <span>تشغيل GoldHEN (v2.4b16)</span>
                    <span>⚡</span>
                </a>
                <a href="./payloads/505/index.html">
                    <span>WebKit Exploit</span>
                    <span>🔗</span>
                </a>
            </div>
        </div>

        <!-- Firmware 6.72 -->
        <div class="section">
            <h3>Firmware 6.72 <span>GoldHEN Ready</span></h3>
            <div class="links">
                <a href="./payloads/672/goldhen.bin">
                    <span>تشغيل GoldHEN (v2.4b16)</span>
                    <span>⚡</span>
                </a>
                <a href="./payloads/672/index.html">
                    <span>WebKit Exploit</span>
                    <span>🔗</span>
                </a>
            </div>
        </div>

        <!-- Firmware 8.00 / 8.03 -->
        <div class="section">
            <h3>Firmware 8.00 / 8.03</h3>
            <div class="links">
                <a href="./payloads/800/ps4wren.html">
                    <span>WebKit Exploit</span>
                    <span>🔗</span>
                </a>
                <a href="./payloads/800/payload.bin">
                    <span>Kernel Exploit / Loader</span>
                    <span>📦</span>
                </a>
            </div>
        </div>

        <!-- Firmware 9.00 -->
        <div class="section">
            <h3>Firmware 9.00 <span>GoldHEN Latest</span></h3>
            <div class="links">
                <a href="./payloads/900/goldhen_2.4b16.bin">
                    <span>GoldHEN v2.4b16 (Exfathax)</span>
                    <span>⚡</span>
                </a>
                <a href="./payloads/900/index.html">
                    <span>WebKit Auto-Exploit</span>
                    <span>🔗</span>
                </a>
            </div>
        </div>

        <!-- Firmware 10.00 / 11.00 -->
        <div class="section">
            <h3>Firmware 10.00 / 11.00 <span>PPPwn</span></h3>
            <div class="links">
                <a href="./payloads/1100/pppwn_goldhen.bin">
                    <span>GoldHEN (PPPwn Executable)</span>
                    <span>⚡</span>
                </a>
                <a href="./payloads/1100/index.html">
                    <span>PPPwn Web Stage Loader</span>
                    <span>🔗</span>
                </a>
            </div>
        </div>

        <!-- Firmware 11.02 -->
        <div class="section">
            <h3>Firmware 11.02</h3>
            <div class="links">
                <a href="./payloads/1102/index.html">
                    <span>WebKit Entry Point</span>
                    <span>🔗</span>
                </a>
                <a href="#">
                    <span>قريباً: PPPwn v2 Support</span>
                    <span>⏳</span>
                </a>
            </div>
        </div>

        <!-- PS5 Section -->
        <div class="section">
            <h3>PS5 Firmware 3.xx - 4.xx</h3>
            <div class="links">
                <a href="./payloads/ps5/etaHEN.bin">
                    <span>تشغيل etaHEN (PS5)</span>
                    <span>⚡</span>
                </a>
                <a href="./payloads/ps5/index.html">
                    <span>UMTX / WebKit Exploit</span>
                    <span>🔗</span>
                </a>
            </div>
        </div>

        <!-- Services Section -->
        <div class="section">
            <h2>خدمات مركز HIGH TECH PS</h2>
            <div class="services">
                <div class="service-box">
                    <h4>🛠️ صيانة وتصليح</h4>
                    <p>صيانة جميع أعطال الباور، البوردة، والدريفت في أذرع التحكم.</p>
                </div>
                <div class="service-box">
                    <h4>🚀 تعديل وتهكير</h4>
                    <p>تنزيل أحدث السوفت وير والألعاب وتفعيل GoldHEN لجميع الإصدارات.</p>
                </div>
                <div class="service-box">
                    <h4>🔄 بيع وشراء</h4>
                    <p>بيع وشراء أجهزة PS4 / PS5 والاكسسوارات بأسعار ممتازة.</p>
                </div>
            </div>
        </div>

    </div>

    <footer>
        <p>HIGH TECH PS Center © 2026 - جميع الحقوق محفوظة</p>
    </footer>

</body>
</html>
