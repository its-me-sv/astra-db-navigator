import {TableSchema, TypeSchema, ColumnSchema, IndexSchema} from './types';

export const tables: Array<TableSchema> = [
  {name: "col1", columns: 48},
  {name: "key_value", columns: 2},
  {name: "users_by_city", columns: 4},
  {name: "videos", columns: 7},
];

export const types: Array<TypeSchema> = [
  {name: "type_name", fields: 3},
  {name: "type_human", fields: 2},
  {name: "type_animal", fields: 4},
  {name: "planet", fields: 1},
];

export const columns: Array<ColumnSchema> =[
  {name: "key", type: "text", static: false},
  {name: "value", type: "text", static: false},
  {name: "city", type: "text", static: false},
  {name: "lastname", type: "text", static: false},
  {name: "firstname", type: "text", static: false},
  {name: "videoid", type: "uuid", static: false},
  {name: "email", type: "text", static: false},
  {name: "frames", type: "list<int>", static: false},
  {name: "tags", type: "set<text>", static: false},
  {name: "title", type: "text", static: false},
  {name: "upload", type: "timestamp", static: false},
  {name: "url", type: "text", static: false},
];

export const indices: Array<IndexSchema> = [
  {name: "fav_books_idx", kind: "COMPOSITES", options: ['bookId']},
  {name: "users_idx", kind: "CUSTOM", options: ['userid']}
];

export const indexTypes: Array<string> = ['SASI', 'SAI'];
export const kinds: Array<string> = ["FULL", "KEYS", "VALUES", "ENTRIES"];
export const booleanOptions: Array<string> = ["true", "false"];
export const analyzerClassses: Array<string> = ["Standard", "Non-tokenizing"];

export const locales: Array<string> = `aa
ab
ae
af
ak
am
an
ar
as
av
ay
az
ba
be
bg
bh
bm
bi
bn
bo
br
bs
ca
ce
ch
co
cr
cs
cu
cv
cy
da
de
dv
dz
ee
el
en
eo
es
et
eu
fa
ff
fi
fj
fo
fr
fy
ga
gd
gl
gn
gu
gv
ha
he
hi
ho
hr
ht
hu
hy
hz
ia
id
ie
ig
ii
ik
io
is
it
iu
ja
jv
ka
kg
ki
kj
kk
kl
km
kn
ko
kr
ks
ku
kv
kw
ky
la
lb
lg
li
ln
lo
lt
lu
lv
mg
mh
mi
mk
ml
mn
mr
ms
mt
my
na
nb
nd
ne
ng
nl
nn
no
nr
nv
ny
oc
oj
om
or
os
pa
pi
pl
ps
pt
qu
rm
rn
ro
ru
rw
sa
sc
sd
se
sg
si
sk
sl
sm
sn
so
sq
sr
ss
st
su
sv
sw
ta
te
tg
th
ti
tk
tl
tn
to
tr
ts
tt
tw
ty
ug
uk
ur
uz
ve
vi
vo
wa
wo
xh
yi
yo
za
zh
zu
`.split('\n');
