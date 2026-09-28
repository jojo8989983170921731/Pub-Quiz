# American Dream Pub Quiz

A static, English-language pub quiz with 30 multiple-choice questions about the history, literature, and debates surrounding the American Dream. Answer options are shuffled for each question, and the quiz tracks a score through to a results screen.

## Run locally

From this directory, start a static web server:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser.

## Join by QR code

The QR code encodes the URL currently open in the browser. For another device to join, use a URL that device can reach. A QR code containing `localhost` only points back to the scanning device itself; use a reachable network address or publish the static files to a web host for remote players.

## Publish for players

The workflow in `.github/workflows/deploy-pages.yml` deploys the quiz to GitHub Pages whenever changes are pushed to `main`. To enable it, push the project files to the public repository, then open **Settings > Pages** and set the publishing source to **GitHub Actions**. After the workflow succeeds, the public site will be available at:

<https://jojo8989983170921731.github.io/Pub-Quiz/>

Players can open that link or scan its QR code without signing in to GitHub.
