lint:
	go vet ./...

format:
	go fmt ./...

build:
	go build -o ./bin/stts ./main.go

install:
	go vet ./...
	go fmt ./...
	go build -o ./bin/stts ./main.go
	mkdir -p ~/bin
	cp ./bin/stts ~/bin/
	chmod +x ~/bin/stts
	export PATH="$(HOME)/bin:$(PATH)"
