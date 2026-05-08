const { spawn } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");
const log = require("./utils/log.js");

// ── Dashboard HTTP Server ──
const DASHBOARD_PORT = process.env.DASHBOARD_PORT || 3000;
const DASHBOARD_FILE = path.join(__dirname, "mostakim.html");

const server = http.createServer((req, res) => {
	if (req.url === "/" || req.url === "/dashboard") {
		fs.readFile(DASHBOARD_FILE, (err, data) => {
			if (err) {
				res.writeHead(404);
				return res.end("dashboard.html not found");
			}
			res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
			res.end(data);
		});
	} else {
		res.writeHead(404);
		res.end("Not found");
	}
});

server.listen(DASHBOARD_PORT, () => {
	log.info(`Dashboard running at http://localhost:${DASHBOARD_PORT}`);
});

// ── Bot Launcher ──
function startProject() {
	const child = spawn("node", ["mostakim.js"], {
		cwd: __dirname,
		stdio: "inherit",
		shell: true
	});

	child.on("close", (code) => {
		if (code == 2) {
			log.info("Restarting Project...");
			startProject();
		}
	});
}

startProject();
