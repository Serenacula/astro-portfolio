---
title: "Splitby CLI Tool"
date: "2025-04-22"
image: "splitby"
link: ""
github: "https://github.com/Serenacula/splitby"
type: "project"
features: []
posted: true
description: "A bash script for string manipulation, replacing 'cut'."
---

A recent project, this was built out of a frustration with the native tool 'cut', which I found to be quite limited in its functionality. The goal was a tool that could split strings by a delimiter, and then choose a selection of the result.

The feature set has expanded rather beyond the initial goal. It now includes full regex parsing, dynamic selections, and a variety of useful features for customising exactly what you want it to do.

Originally built in bash and perl, I have moved it to rust for performance. This included an architectural change to allow for full multithreading, a feature which the original did not include.
