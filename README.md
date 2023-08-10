# get start

npm install

## criar arquivo .env.solsticio (antes configurar projeto firebase)

NEXT_PUBLIC_APP_DEV=false
NEXT_PUBLIC_EMULATOR=false

NEXT_PUBLIC_FIREBASE_EMULATOR_HOST="localhost"
NEXT_PUBLIC_FIREBASE_FIRESTORE_EMULATOR_PORT="8080"
NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_PORT="9099"
NEXT_PUBLIC_FIREBASE_STORAGE_EMULATOR_PORT="9199"

NEXT_PUBLIC_GOOGLE_ANALYTICS=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=

NEXT_PUBLIC_FIREBASE_APP_CHECK=
NEXT_PUBLIC_FIREBASE_APPCHECK_DEBUG_TOKEN=

NEXT_PUBLIC_BNR_CODIGO_CLIENTE="h46vPPGUeu9Wc10yzerH"

NEXT_PUBLIC_BNR_SITE_NOME="Solstício"
NEXT_PUBLIC_BNR_SITE_DOMINIO="https://bnr-beta-solsticio.web.app"
NEXT_PUBLIC_BNR_SITE_TITULO="Solstício - Serviços elétricos"
NEXT_PUBLIC_BNR_SITE_SLUG="bnr-beta-solsticio"
NEXT_PUBLIC_BNR_SITE_DESCRICAO="Solstício - Serviços elétricos"

NEXT_PUBLIC_BNR_TEMPLATE_COR1="#364571"
NEXT_PUBLIC_BNR_TEMPLATE_COR2="#3856AE"
NEXT_PUBLIC_BNR_TEMPLATE_COR3="#71D27E"

# database
## install node-firestore-import-export
npm install -g node-firestore-import-export

## importar (baixar serviceAccountKey.json no projeto firebase):
$ npx -p node-firestore-import-export firestore-import -a serviceAccountKey.json -b db_20230704.json

# run local
## install env-cmd
npm install -g env-cmd
npm run dev
