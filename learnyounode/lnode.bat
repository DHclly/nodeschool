@echo off
if /i "%1" =="v" (learnyounode verify %2) else (if /i "%1" == "r" (learnyounode run %2) else (learnyounode %1))
