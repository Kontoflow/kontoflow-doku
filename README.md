# Kontoflow Dokumentation

## Doku bearbeiten

### Installation von Abhängigkeiten
- Windows Execution Policy anpassen
```Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned```

- Paketmanager fnm installieren
```winget install Schniz.fnm```

- fnm Pakete zum Pfad hinzufügen
```
if (-not (Test-Path $profile)) { New-Item $profile -Force }
Invoke-Item $profile
```
- Im sich öffnened Editor folgenden Text am Ende des Dokuments einfügen
`fnm env --use-on-cd --shell powershell | Out-String | Invoke-Expression`

- Editor schließen

- Node.js 22 LTS installieren
```fnm install 22```

- Prüfen ob Node.js richtig installiert ist
```node -v # Should print "v22.14.0".```

- Prüfen ob npm richtig installiert ist
```npm -v # Should print "10.9.2".```

- Git repo clonen
```git clone git@github.com:Kontoflow/kontoflow-doku.git```

- Mit Texteditor öffnen

- Abhängigkeiten installieren
`npm install`

- Livevorschau im Browser starten. Dev Server mit CTRL + C wieder beenden
`npm run dev`


## Wie die Doku Vorlage erstellt wurde

`npm create astro@latest -- --template starlight`