JS 	= ${addprefix dist/, *.js}
TS	= ${addprefix src/, *.ts}
RM 	= rm -rf
TSC = tsc
INDEX = index.js
NODE = node

all: ${TSC}

${TSC}:
	@${TSC} ${TS}
	@echo "compiled all .ts files"

run:
	@${NODE} ${INDEX}

clean:
	@${RM} ${JS}
	@echo "removed all .js files"
