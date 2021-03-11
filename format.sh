cat "$1".json | jq -c '.[]' > "$1"-prcd.json
