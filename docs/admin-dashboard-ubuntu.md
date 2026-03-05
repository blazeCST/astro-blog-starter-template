# Admin Dashboard for School Website (Ubuntu + VS Code Remote SSH)

This guide sets up a practical admin panel using **Directus + PostgreSQL + Nginx** on Ubuntu Server, then connects it to your Astro website.

## 1) Server prerequisites

On Ubuntu server:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y ca-certificates curl gnupg
```

Install Docker + Compose plugin:

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
```

Log out/in once after `usermod`.

## 2) Prepare deployment files

Inside this repo, copy the env template:

```bash
cd deploy/admin
cp .env.example .env
```

Edit `.env` and set strong passwords and real domain.

## 3) TLS certificates

This scaffold expects certificates at:

- `deploy/admin/nginx/certs/fullchain.pem`
- `deploy/admin/nginx/certs/privkey.pem`

For production, use Let's Encrypt and mount real cert files.

## 4) Start the admin stack

```bash
cd deploy/admin
docker compose --env-file .env up -d
```

Open your admin URL, e.g. `https://admin.example-school.org`.

## 5) Security checklist for school use

- Put admin on its own subdomain (`admin.yourschool.org`)
- Enforce strong passwords and 2FA
- Create role-based access (IT, editor, teacher)
- Keep backups of PostgreSQL daily
- Restrict server with UFW (`22`, `80`, `443` only)
- Keep system and containers updated monthly

## 6) Connect Astro website to Directus

In Astro, fetch published content from Directus API.

Example server-side fetch pattern:

```ts
const res = await fetch(`${import.meta.env.DIRECTUS_URL}/items/news?filter[status][_eq]=published`);
const data = await res.json();
```

Set `.env` in Astro app:

```bash
DIRECTUS_URL=https://admin.example-school.org
```

Use this data in your Astro pages/components to render school announcements/news.

## 7) Remote SSH workflow in VS Code

- Install **Remote - SSH** extension
- Connect to Ubuntu host
- Open project folder remotely
- Run Docker commands from integrated terminal
- Keep production `.env` only on server (never commit secrets)
