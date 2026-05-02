#!/bin/bash
set -e
mkdir -p /config
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/slopsmith-demo.conf
