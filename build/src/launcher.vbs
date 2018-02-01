Set wshShell = WScript.CreateObject("WScript.Shell")

chromePath = getChrome()

if chromePath = "" then
	msgbox "The Google Chrome not found"
else
	strCurrentFolder=urlencode(wshShell.CurrentDirectory)
	params = " --disable-web-security --no-first-run"
	command = chr(34) & chromePath & chr(34) & params & chr(34) & "file://" & strCurrentFolder & "\test.html" & chr(34)
	wshShell.Run command
	wshShell.AppActivate "YA! Push"
	WScript.Sleep 1000 
	wshShell.SendKeys "{F11}"
end if

Function getChrome()
	folders = Array("AllUsersStartMenu", "StartMenu", "Desktop", "AllUsersDesktop", "AllUsersStartMenu", "StartMenu")
	paths = Array("\Programs\Google Chrome\Google Chrome.lnk", "\Programs\Google Chrome\Google Chrome.lnk", "\Google Chrome.lnk", "\Google Chrome.lnk", "\�{����\Google �s��\Google �s��.lnk", "\�{����\Google �s��\Google �s��.lnk")
	For i=0 to  UBound(folders)
		chromepath = getLink(folders(i), paths(i))
		IF chromepath <> "" then
			getChrome = chromepath
			Exit Function
		End if
	Next
End Function

Function getLink(folder, path)
	'Set wshShell = WScript.CreateObject("WScript.Shell")
	strFolder = wshShell.SpecialFolders(folder)
	Set objLnk = wshShell.createshortcut(strFolder & path)
	getLink = objLnk.targetpath
End Function

Function urlencode(str)
    Dim i,c,s,length
    length = Len(str)
    For i = 1 To length
        s = Mid(str,i,1)
        c = "&H" & Hex(AscW(Mid(str,i,1)))
        If ( c >= AscW("A") And c <= AscW("Z") ) Or _
            ( c >= AscW("a") And c <= AscW("z") ) Or _
            ( c >= AscW("0") And c <= AscW("9") ) Or _
            ( c = AscW("-") Or c = AscW("_") Or c = AscW(".") ) Then
            urlencode = urlencode & s
        ElseIf c = AscW(" ") Then
            urlencode = urlencode & "+"
        Else
            If c >= &H0001 And c <= &H007F Then
                urlencode = urlencode & s
            ElseIf c > &H07FF Then
                urlencode = urlencode & "%" & Hex(&HE0 Or (c\(2^12) And &H0F))
                urlencode = urlencode & "%" & Hex(&H80 Or (c\(2^6) And &H3F))
                urlencode = urlencode & "%" & Hex(&H80 Or (c\(2^0) And &H3F))
            Else
                urlencode = urlencode & "%" & Hex(&HC0 Or (c\(2^6) And &H1F))
                urlencode = urlencode & "%" & Hex(&H80 Or (c\(2^0) And &H3F))
            End If
        End If
    Next
End Function
