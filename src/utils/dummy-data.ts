import {KeyspaceSchema, TableSchema, TypeSchema, ColumnSchema, IndexSchema} from './types';

export const dummyKeyspaces: Array<KeyspaceSchema> = [
  {name: "todos", dataCenters: 1},
  {name: "system_schema"},
  {name: "drapetisca", dataCenters: 1},
  {name: "system_virtual_schema"},
  {name: "netflix", dataCenters: 1},
  {name: "datastax_sla"},
  {name: "system_traces"},
  {name: "system_views"},
  {name: "system_auth"},
  {name: "data_endpoint_auth"},
  {name: "tiktok_keyspace", dataCenters: 1},
  {name: "nosql1", dataCenters: 1},
  {name: "system"},
  {name: "tiktok", dataCenters: 1},
];

export const dummyTables: Array<TableSchema> = [
  { name: "col1", columns: 48 },
  { name: "key_value", columns: 2 },
  { name: "users_by_city", columns: 4 },
  { name: "videos", columns: 7 },
];

export const dummyTypes: Array<TypeSchema> = [
  { name: "type_name", fields: 3 },
  { name: "type_human", fields: 2 },
  { name: "type_animal", fields: 4 },
  { name: "planet", fields: 1 },
];

export const dummyColumns: Array<ColumnSchema> =[
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

export const dummyIndices: Array<IndexSchema> = [
  {name: "fav_books_idx", kind: "COMPOSITES", options: ['bookId']},
  {name: "users_idx", kind: "CUSTOM", options: ['userid']}
];

export const indexTypes: Array<string> = ['SAI'];
export const kinds: Array<string> = ["NONE", "KEYS", "VALUES", "ENTRIES"];
export const booleanOptions: Array<string> = ["true", "false"];

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

export const dataTypes: Array<string> = [
  "ascii", "bigint", "blob", "boolean", "date", "decimal",
  "double", "float", "inet", "int", "list",
  "map", "set", "smallint", "text", "time", "timestamp",
  "timeuuid", "tinyint", "tuple", "uuid", "varchar",
  "varint"
];
export const collections: Array<string> = ["list", "map", "set"];
export const nonMapCollections: Array<string> = ["list", "tuple", "set"]
export const colTypes: Array<string> = ["Partition", "Clustering", "None"];
export const collectionDepth: Array<string> = "123".split('');
export const collectionTypes: Array<string> = [
  "ascii", "bigint", "blob", "boolean", "date", "decimal",
  "double", "float", "inet", "int", "smallint", "text", "time", 
  "timestamp", "timeuuid", "tinyint", "uuid", "varchar", "varint"
];
