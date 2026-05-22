#!/usr/bin/env bash
#
# RMT Solutions — repo cleanup (SEO/perf audit, May 2026)
# -------------------------------------------------------
# Removes accidental/orphaned files found during the audit. None of these
# are referenced anywhere in the codebase, so deleting them is safe and
# trims dead weight from your Vercel deploy.
#
# HOW TO USE:
#   1. Copy this script into the ROOT of your repo (same folder as package.json).
#   2. Run:  bash cleanup-stray-files.sh
#   3. Review `git status`, then commit.
#
# It uses `git rm` where possible so the deletions are staged for you.
# Falls back to plain `rm` if a path isn't tracked by git.

set -u

remove() {
  local path="$1"
  if [ -e "$path" ]; then
    if git rm -r --quiet "$path" 2>/dev/null; then
      echo "removed (staged): $path"
    else
      rm -rf "$path"
      echo "removed:          $path"
    fi
  else
    echo "skipped (absent): $path"
  fi
}

echo "Cleaning up stray / orphaned files..."
echo

# 1. Two 1-byte junk files (likely created by an accidental keystroke / bad save)
remove "app/resources/lorry-loader-lift-plan-templates/e"
remove "public/services/ts"

# 2. Orphaned image folder. The live site references /images/services/*.webp
#    (see app/services/**). The duplicate copies in public/services/ are NOT
#    referenced anywhere and just bloat the deploy. The real images in
#    public/images/services/ are untouched.
remove "public/services"

echo
echo "Done. Review with:  git status"
echo "Then commit:        git commit -m 'Remove stray/orphaned files (SEO audit cleanup)'"
