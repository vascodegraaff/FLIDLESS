xxd <&0 -b | cut -d\  -f2-7 | tr -d ' \n' | sed -e 's/1/,1/g' -e 's/0/,0/g' -e 's/,/[/1' -e 's/$/]/'
