cat "$1".json | jq -c '.[]' > "$1"-prcd.json
sed -i -e '2,3d' "$1".json
sed -i -e '352,361d' "$1".json
cat "$1".json | jq -c '.[]' > "$1"-prcd.json
if [ -e "$1".json-e ]; then
	rm "$1".json-e
fi