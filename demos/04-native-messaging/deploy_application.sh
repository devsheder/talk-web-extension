#/bin/sh

homeFolder=`echo /Users/adrienlasselle`
chromeUserFolder="$homeFolder/Library/Application Support/Google/Chrome/NativeMessagingHosts/"
firefoxUserFolder="$homeFolder/Library/Application Support/Mozilla/NativeMessagingHosts/"

if [ -d "$chromeUserFolder" ]
then
    echo "Copying manifest file to Chrome folder"
    cp "application/my_native_app_chrome.json" "$chromeUserFolder"
fi

if [ -d "$firefoxUserFolder" ]
then
    echo "Copying manifest file to Firefox folder"
    cp "application/my_native_app_ff.json" "$firefoxUserFolder"
fi