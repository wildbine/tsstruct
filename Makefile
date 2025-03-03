.PHONY: install test clear

install: clear
	npm install

test:
	npm test

all: clear install test

clear:
	@rm -rf node_modules
	@rm -f package-lock.json
	@echo "Dependencies and package-lock.json removed."