self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={a5t:function a5t(){},
aG7(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.ad(0,e)
w=f.ad(0,e)
return e.a_(0,w.Bq(B.H(x.Gl(w)/t,0,1)))},
bK3(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.ad(0,q),o=e.b,n=o.ad(0,q),m=e.d,l=m.ad(0,q),k=p.Gl(n),j=n.Gl(n),i=p.Gl(l),h=l.Gl(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.aG7(d,q,o),A.aG7(d,o,x),A.aG7(d,x,m),A.aG7(d,m,q)]
v=B.bl("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.aC()},
bNS(){var x=new B.bs(new Float64Array(16))
x.uu()
return new A.acy(x,$.ao())},
bwH(d,e,f){return Math.log(f/d)/Math.log(e/100)},
bxl(d,e){var x,w,v,u,t,s,r=new B.bs(new Float64Array(16))
r.ru(d)
r.ye(r)
x=e.a
w=e.b
v=new B.cE(new Float64Array(3))
v.uO(x,w,0)
v=r.Bl(v)
u=e.c
t=new B.cE(new Float64Array(3))
t.uO(u,w,0)
t=r.Bl(t)
w=e.d
s=new B.cE(new Float64Array(3))
s.uO(u,w,0)
s=r.Bl(s)
u=new B.cE(new Float64Array(3))
u.uO(x,w,0)
u=r.Bl(u)
x=new B.cE(new Float64Array(3))
x.ru(v)
w=new B.cE(new Float64Array(3))
w.ru(t)
v=new B.cE(new Float64Array(3))
v.ru(s)
t=new B.cE(new Float64Array(3))
t.ru(u)
return new A.a9p(x,w,v,t)},
bwz(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.n,w=0;w<4;++w){v=r[w]
u=A.bK3(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.j(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.j(x.a,t)}return A.bom(x)},
bom(d){return new B.j(B.bhb(C.d.oV(d.a,9)),B.bhb(C.d.oV(d.b,9)))},
bRD(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a3:C.w},
LX:function LX(d,e,f,g,h,i){var _=this
_.r=d
_.x=e
_.ay=f
_.cx=g
_.db=h
_.a=i},
Tz:function Tz(d,e,f,g,h){var _=this
_.d=null
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.rW$=f
_.ar$=g
_.a=null
_.b=h
_.c=null},
b3S:function b3S(){},
ajX:function ajX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
acy:function acy(d,e){var _=this
_.a=d
_.U$=0
_.ac$=e
_.ao$=_.au$=0
_.aG$=!1},
T9:function T9(d,e){this.a=d
this.b=e},
aJT:function aJT(d,e){this.a=d
this.b=e},
YA:function YA(){},
bNT(){return new A.uI(null)},
uI:function uI(d){this.a=d},
X4:function X4(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=$
_.x=null
_.rW$=g
_.ar$=h
_.a=null
_.b=i
_.c=null},
bdK:function bdK(d,e){this.a=d
this.b=e},
bdL:function bdL(d){this.a=d},
bdR:function bdR(d){this.a=d},
bdQ:function bdQ(d){this.a=d},
bdP:function bdP(d){this.a=d},
bdO:function bdO(d){this.a=d},
bdN:function bdN(d,e){this.a=d
this.b=e},
bdM:function bdM(d,e,f){this.a=d
this.b=e
this.c=f},
afK:function afK(d,e){this.b=d
this.a=e},
aVk:function aVk(d,e){this.a=d
this.b=e},
Zk:function Zk(){},
bl3(d,e,f,g,h){var x=new A.a_A(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.avv(d,e,f,g,h)
return x},
a_A:function a_A(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
auV:function auV(d){this.a=d},
auU:function auU(d){this.a=d},
auT:function auT(d){this.a=d},
aVj:function aVj(d){this.a=d
this.c=this.b=null},
b7W:function b7W(d,e){this.a=d
this.b=e},
hZ:function hZ(d,e,f){this.a=d
this.b=e
this.c=f},
afL:function afL(){},
a0Q:function a0Q(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awr:function awr(d){this.a=d},
awq:function awq(d,e){this.a=d
this.b=e},
B4:function B4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aX9:function aX9(d){this.a=d},
a3U:function a3U(d,e,f){this.c=d
this.d=e
this.a=f},
a9p:function a9p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},B,C,D,J,E,F
A=a.updateHolder(c[87],A)
B=c[0]
C=c[2]
D=c[127]
J=c[1]
E=c[100]
F=c[116]
A.a5t.prototype={}
A.LX.prototype={
K(){var x=null,w=y.z
return new A.Tz(new B.au(x,w),new B.au(x,w),x,x,C.j)}}
A.Tz.prototype={
gQc(){var x=$.as.Z$.z.i(0,this.e).gab()
x.toString
x=y.x.a(x).k3
x.toString
return this.a.r.Jf(new B.A(0,0,0+x.a,0+x.b))},
gSx(){var x=$.as.Z$.z.i(0,this.f).gab()
x.toString
x=y.x.a(x).k3
return new B.A(0,0,0+x.a,0+x.b)},
HN(a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this
if(a2.m(0,C.n)){x=new B.bs(new Float64Array(16))
x.ru(a1)
return x}w=B.bl("alignedTranslation")
if(a0.Q!=null){a0.a.toString
switch(3){case 3:w.srI(a2)
break}}else w.srI(a2)
v=new B.bs(new Float64Array(16))
v.ru(a1)
v.px(0,w.aC().a,w.aC().b)
u=A.bxl(v,a0.gSx())
x=a0.gQc()
if(x.gakt(x))return v
x=a0.gQc()
t=a0.ay
s=new B.bs(new Float64Array(16))
s.uu()
r=x.c
q=x.a
p=r-q
o=x.d
x=x.b
n=o-x
s.px(0,p/2,n/2)
s.VB(t)
s.px(0,-p/2,-n/2)
t=new B.cE(new Float64Array(3))
t.uO(q,x,0)
t=s.Bl(t)
p=new B.cE(new Float64Array(3))
p.uO(r,x,0)
p=s.Bl(p)
x=new B.cE(new Float64Array(3))
x.uO(r,o,0)
x=s.Bl(x)
r=new B.cE(new Float64Array(3))
r.uO(q,o,0)
r=s.Bl(r)
q=new Float64Array(3)
new B.cE(q).ru(t)
t=new Float64Array(3)
new B.cE(t).ru(p)
p=new Float64Array(3)
new B.cE(p).ru(x)
x=new Float64Array(3)
new B.cE(x).ru(r)
r=q[0]
o=t[0]
n=p[0]
m=x[0]
l=Math.min(r,Math.min(o,Math.min(n,m)))
q=q[1]
t=t[1]
p=p[1]
x=x[1]
k=Math.min(q,Math.min(t,Math.min(p,x)))
j=Math.max(r,Math.max(o,Math.max(n,m)))
i=Math.max(q,Math.max(t,Math.max(p,x)))
x=new B.cE(new Float64Array(3))
x.uO(l,k,0)
t=new B.cE(new Float64Array(3))
t.uO(j,k,0)
r=new B.cE(new Float64Array(3))
r.uO(j,i,0)
q=new B.cE(new Float64Array(3))
q.uO(l,i,0)
p=new B.cE(new Float64Array(3))
p.ru(x)
x=new B.cE(new Float64Array(3))
x.ru(t)
t=new B.cE(new Float64Array(3))
t.ru(r)
r=new B.cE(new Float64Array(3))
r.ru(q)
h=new A.a9p(p,x,t,r)
g=A.bwz(h,u)
if(g.m(0,C.n))return v
x=v.Wh().a
t=x[0]
x=x[1]
f=a1.H3()
t-=g.a*f
x-=g.b*f
e=new B.bs(new Float64Array(16))
e.ru(a1)
r=new B.cE(new Float64Array(3))
r.uO(t,x,0)
e.a6a(r)
d=A.bwz(h,A.bxl(e,a0.gSx()))
if(d.m(0,C.n))return e
r=d.a===0
if(!r&&d.b!==0){x=new B.bs(new Float64Array(16))
x.ru(a1)
return x}t=r?t:0
x=d.b===0?x:0
r=new B.bs(new Float64Array(16))
r.ru(a1)
q=new B.cE(new Float64Array(3))
q.uO(t,x,0)
r.a6a(q)
return r},
ZT(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.bs(new Float64Array(16))
x.ru(d)
return x}w=r.d.a.H3()
x=r.gSx()
v=r.gQc()
u=r.gSx()
t=r.gQc()
s=B.H(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.ay,2.5)
x=new B.bs(new Float64Array(16))
x.ru(d)
x.t4(0,s/w)
return x},
aIY(d,e,f){var x,w,v,u
if(e===0){x=new B.bs(new Float64Array(16))
x.ru(d)
return x}w=this.d.yu(f)
x=new B.bs(new Float64Array(16))
x.ru(d)
v=w.a
u=w.b
x.px(0,v,u)
x.VB(-e)
x.px(0,-v,-u)
return x},
Qz(d){switch(d){case D.aD8:return!1
case D.nA:this.a.toString
return!0
case D.kb:case null:this.a.toString
return!0}},
aag(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.nA
else return D.kb},
aI3(d){var x,w,v=this
v.a.cx.$1(d)
x=v.y
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.uE(0)
x=v.y
x.sk(0,x.a)
x=v.r
if(x!=null)x.a.B(0,v.gRv())
v.r=null}x=v.z
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.uE(0)
x=v.z
x.sk(0,x.a)
x=v.w
if(x!=null)x.a.B(0,v.gRy())
v.w=null}v.Q=v.ch=null
v.at=v.d.a.H3()
v.as=v.d.yu(d.b)
v.ax=v.ay},
aKq(d){var x,w,v,u,t,s,r=this,q=r.d.a.H3(),p=r.x=d.c,o=r.d.yu(p),n=r.ch
if(n===D.kb)n=r.ch=r.aag(d)
else if(n==null){n=r.aag(d)
r.ch=n}if(!r.Qz(n)){r.a.toString
return}switch(r.ch.a){case 1:n=r.at
n.toString
x=r.d
x.sk(0,r.ZT(x.a,n*d.d/q))
w=r.d.yu(p)
n=r.d
x=n.a
v=r.as
v.toString
n.sk(0,r.HN(x,w.ad(0,v)))
u=r.d.yu(p)
p=r.as
p.toString
if(!A.bom(p).m(0,A.bom(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.ax
x.toString
t=x+n
n=r.d
n.sk(0,r.aIY(n.a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=A.bRD(n,o)}n=r.as
n.toString
s=o.ad(0,n)
n=r.d
n.sk(0,r.HN(n.a,s))
r.as=r.d.yu(p)
break}r.a.toString},
aKm(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a.toString
m.as=m.ax=m.at=null
x=m.r
if(x!=null)x.a.B(0,m.gRv())
x=m.w
if(x!=null)x.a.B(0,m.gRy())
x=m.y
x===$&&B.c()
x.sk(0,x.a)
x=m.z
x===$&&B.c()
x.sk(0,x.a)
if(!m.Qz(m.ch)){m.Q=null
return}x=m.ch
if(x===D.kb){x=d.a.a
if(x.guq()<50){m.Q=null
return}w=m.d.a.Wh().a
v=w[0]
w=w[1]
m.a.toString
u=B.a4I(0.0000135,v,x.a,0,C.cv)
m.a.toString
t=B.a4I(0.0000135,w,x.b,0,C.cv)
x=x.guq()
m.a.toString
s=A.bwH(x,0.0000135,10)
x=u.gJ1()
r=t.gJ1()
q=y.L
p=B.aP(C.dW,m.y,null)
m.r=new B.I(p,new B.a6(new B.j(v,w),new B.j(x,r),q),q.h("I<Y.T>"))
m.y.e=B.dA(0,0,0,C.d.aS(s*1000),0,0)
p.a1(0,m.gRv())
m.y.p_(0)}else if(x===D.nA){x=d.b
w=Math.abs(x)
if(w<0.1){m.Q=null
return}o=m.d.a.H3()
m.a.toString
n=B.a4I(0.0026999999999999997,o,x/10,0,C.cv)
m.a.toString
s=A.bwH(w,0.0000135,0.1)
x=n.vP(0,s)
w=y.t
v=B.aP(C.dW,m.z,null)
m.w=new B.I(v,new B.a6(o,x,w),w.h("I<Y.T>"))
m.z.e=B.dA(0,0,0,C.d.aS(s*1000),0,0)
v.a1(0,m.gRy())
m.z.p_(0)}},
aI5(d){var x,w,v,u,t,s,r,q,p=this
if(y.C.b(d)){if(d.gum(d)===C.cR){x=p.a.cx
w=d.gqw(d)
v=d.guA()
x.$1(new B.A2(w,v,0))
x=d.gqw(d).a_(0,d.gAy())
w=d.gAy()
u=B.zy(d.gtN(d),null,w,x)
if(!p.Qz(D.kb)){p.a.toString
return}x=p.d
x.toString
t=x.yu(d.guA())
x=p.d
x.toString
s=x.yu(d.guA().ad(0,u))
x=p.d
x.sk(0,p.HN(x.a,s.ad(0,t)))
p.a.toString
return}if(d.gAy().b===0)return
x=d.gAy()
p.a.toString
r=Math.exp(-x.b/200)}else if(y.P.b(d))r=d.gAx(d)
else return
x=p.a.cx
w=d.gqw(d)
v=d.guA()
x.$1(new B.A2(w,v,0))
if(!p.Qz(D.nA)){p.a.toString
return}x=p.d
x.toString
t=x.yu(d.guA())
x=p.d
x.sk(0,p.ZT(x.a,r))
x=p.d
x.toString
q=x.yu(d.guA())
x=p.d
x.sk(0,p.HN(x.a,q.ad(0,t)))
p.a.toString},
aJF(){var x,w,v,u,t=this,s=t.y
s===$&&B.c()
s=s.r
if(!(s!=null&&s.a!=null)){t.Q=null
s=t.r
if(s!=null)s.a.B(0,t.gRv())
t.r=null
s=t.y
s.sk(0,s.a)
return}s=t.d.a.Wh().a
x=s[0]
s=s[1]
w=t.d.yu(new B.j(x,s))
s=t.d
s.toString
x=t.r
v=x.b
x=x.a
u=s.yu(v.N(0,x.gk(x))).ad(0,w)
x=t.d
x.sk(0,t.HN(x.a,u))},
aKk(){var x,w,v,u,t,s=this,r=s.z
r===$&&B.c()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.B(0,s.gRy())
s.w=null
r=s.z
r.sk(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.N(0,r.gk(r))
r=s.d.a.H3()
x=s.d
x.toString
v=s.x
v===$&&B.c()
u=x.yu(v)
v=s.d
v.sk(0,s.ZT(v.a,w/r))
t=s.d.yu(s.x)
r=s.d
r.sk(0,s.HN(r.a,t.ad(0,u)))},
aKG(){this.E(new A.b3S())},
aa(){var x,w=this,v=null
w.ap()
x=w.a.db
w.d=x
x.a1(0,w.ga_f())
w.y=B.aV(C.u,v,v,v,1,v,w)
w.z=B.aV(C.u,v,v,v,1,v,w)},
ae(d){var x,w,v=this
v.aw(d)
x=v.a
if(x.db!==d.db){x=v.ga_f()
v.d.B(0,x)
w=v.a.db
v.d=w
w.a1(0,x)}},
j(){var x=this,w=x.y
w===$&&B.c()
w.j()
w=x.z
w===$&&B.c()
w.j()
x.d.B(0,x.ga_f())
x.a.toString
x.aug()},
n(d){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.ajX(t.x,v.e,C.r,!0,x,u,u)
return B.DP(C.d9,B.cB(C.aU,w,C.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaKl(),v.gaI2(),v.gaKp(),u,u,u,u,u,u,u,u,u,u,u,!1,new B.j(0,-0.005)),v.f,u,u,u,v.gaI4(),u)}}
A.ajX.prototype={
n(d){var x=this,w=B.on(x.w,new B.fZ(x.c,x.d),x.r,!0)
return B.jB(w,x.e,null)}}
A.acy.prototype={
yu(d){var x=this.a,w=new B.bs(new Float64Array(16))
if(w.ye(x)===0)B.W(B.fU(x,"other","Matrix cannot be inverted"))
x=new B.cE(new Float64Array(3))
x.uO(d.a,d.b,0)
x=w.Bl(x).a
return new B.j(x[0],x[1])}}
A.T9.prototype={
M(){return"_GestureType."+this.b}}
A.aJT.prototype={
M(){return"PanAxis."+this.b}}
A.YA.prototype={
pE(){this.qe()
this.q4()
this.tm()},
j(){var x=this,w=x.ar$
if(w!=null)w.B(0,x.gti())
x.ar$=null
x.a3()}}
A.uI.prototype={
K(){var x=null
return new A.X4(new B.au(x,y.z),A.bl3(x,8,1,16,x),A.bNS(),x,x,C.j)}}
A.X4.prototype={
aJG(){var x=this,w=x.r,v=w.b
w=w.a
x.f.sk(0,v.N(0,w.gk(w)))
w=x.w
w===$&&B.c()
w=w.r
if(!(w!=null&&w.a!=null)){w=x.r
if(w!=null)w.a.B(0,x.ga_8())
x.r=null
w=x.w
w.sk(0,w.a)}},
aKo(d){var x,w=this,v=w.w
v===$&&B.c()
x=v.Q
x===$&&B.c()
if(x===C.ah){v.uE(0)
v=w.r
if(v!=null)v.a.B(0,w.ga_8())
w.r=null
v=w.w
v.sk(0,v.a)}},
aKD(d){var x=this,w=x.f.yu(d.a.ad(0,B.cJ(y.x.a($.as.Z$.z.i(0,x.d).gab()).rO(0,null),C.n)))
x.E(new A.bdK(x,x.e.b_U(w)))},
aa(){var x=null
this.ap()
this.w=B.aV(C.u,x,x,x,1,x,this)},
n(d){var x=null,w=B.o(d)
return B.c3(B.cG(x,x,!1,x,x,1,x,x,x,!1,x,!1,x,x,x,x,!0,x,x,x,x,x,B.t(B.x(d,C.h,y.s).gbr(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.ax.b,B.a_(x,new B.cU(new A.bdL(this),x),C.e,D.vl,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gb0D(),this.gaVA()],y.p),x)},
gb0D(){var x=null,w=this.c
w.toString
return B.ce(B.o(w).ax.cy,x,x,D.a5K,x,x,new A.bdR(this),x,x,x,"Reset")},
gaVA(){var x=null,w=this.c
w.toString
return B.ce(B.o(w).ax.cy,x,x,D.a5H,x,x,new A.bdP(this),x,x,x,"Edit")},
j(){var x=this.w
x===$&&B.c()
x.j()
this.avm()}}
A.afK.prototype={
aH(d,e){this.b.ah(0,new A.aVk(this,d))},
v2(d){return d.b!==this.b}}
A.Zk.prototype={
pE(){this.qe()
this.q4()
this.tm()},
j(){var x=this,w=x.ar$
if(w!=null)w.B(0,x.gti())
x.ar$=null
x.a3()}}
A.a_A.prototype={
avv(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a6(s.d,B.b([new B.j(0,q),new B.j(r,x),new B.j(r,w),new B.j(r,w),new B.j(0,v),new B.j(0,v),new B.j(u,w),new B.j(u,w),new B.j(u,x)],y.g))
if(d!=null)C.b.a6(s.f,d)
else{t=s.aaq(null)
for(r=s.f;t!=null;){r.push(t)
t=s.aaq(t)}}},
gp0(d){return new A.aVj(this.f)},
aav(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.b7W(w,x)},
aaq(d){var x,w,v,u=this
if(d==null)return new A.hZ(-u.a,0,D.iv)
x=d.a
w=u.aav(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.hZ(x,u.aav(x).a,D.iv)}return new A.hZ(x,v+1,D.iv)},
gvp(d){var x=this.b,w=this.a
return new B.E((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
b_U(d){var x=this,w=x.gvp(x),v=d.b-x.gvp(x).b/2,u=x.b,t=new A.hZ(C.d.aS((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.d.aS(0.6666666666666666*v/u),D.iv)
w=D.R1.gaie().a
v=t.gaie().a
if(C.d.rK(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.Gx(x.f,new A.auV(t))},
anJ(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.an(r).h("am<1,j>"),p=B.az(new B.am(r,new A.auU(new B.u1(w*v*u+t/2*v*s+x.gvp(x).a/2,1.5*v*s+x.gvp(x).b/2,y.O)),q),!0,q.h("bN.E"))
q=B.bn(p.length,e,!1,y.G)
return $.a7().aia(C.Pb,p,q,null,null)},
aUR(d){var x=this
if(J.h(x.e,d))return x
return A.bl3(x.f,x.a,x.c,x.b,d)},
aUQ(d,e){var x,w,v=this,u=new A.hZ(d.a,d.b,e),t=v.f,s=C.b.Ux(t,new A.auT(d))
if(J.h(v.t2(0,s),d)&&d.c.m(0,e))return v
x=B.i9(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.bl3(x,v.a,v.c,v.b,w)}}
A.aVj.prototype={
D(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gY(d){return this.c}}
A.b7W.prototype={}
A.hZ.prototype={
l(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.l(0)+")"},
m(d,e){if(e==null)return!1
if(J.aj(e)!==B.P(this))return!1
return e instanceof A.hZ&&e.a===this.a&&e.b===this.b},
gF(d){return B.a8(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
gaie(){var x=this.a,w=this.b,v=new B.cE(new Float64Array(3))
v.uO(x,w,-x-w)
return v}}
A.afL.prototype={}
A.a0Q.prototype={
n(d){var x=this.c,w=B.k(x).h("md<1,B4>")
return B.aC(B.az(new B.md(x,new A.awr(this),w),!0,w.h("D.E")),C.l,null,C.a4,C.i,null)}}
A.B4.prototype={
n(d){var x=null,w=!this.d?x:D.a4Z
return B.a_(x,B.btH(!1,w,C.e,C.RZ,0,2,!0,this.c,x,4,x,8,x,4,x,x,new A.aX9(this),C.dl,x,x),C.e,x,x,x,x,60,x,x,D.a2d,x,x,60)}}
A.a3U.prototype={
n(d){var x=null,w=B.e_([C.m,C.kR,C.oA,C.vs,D.vl],y.G),v=this.c
return B.ab(B.b([B.t(""+v.a+", "+v.b,x,x,x,x,C.jZ,C.rH,x,x),new A.a0Q(w,v.c,this.d,x)],y.p),C.aO,x,C.k,C.i,C.o)}}
A.a9p.prototype={}
var z=a.updateTypes(["~()","~(A2)","K(hZ)","~(OG)","~(EX)","~(hT)","~(jX)","~(hZ?)","B4(l)"])
A.b3S.prototype={
$0(){},
$S:0}
A.bdK.prototype={
$0(){var x=this.a
x.e=x.e.aUR(this.b)},
$S:0}
A.bdL.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=e.d,r=this.a
if(r.x==null){x=new B.bs(new Float64Array(16))
x.uu()
w=r.e
w=w.gvp(w)
v=r.e
x.px(0,t/2-w.a/2,s/2-v.gvp(v).b/2)
r.x=x
r.f.sk(0,x)}x=r.e
x=x.gvp(x)
return B.jB(B.dj(B.cB(C.aU,new A.LX(new B.X(t,s,t,s),B.bnd(B.ha(u,u,u,new A.afK(r.e,u),x)),0.01,r.gaKn(),r.f,r.d),C.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaKC(),u,u,u,!1,C.a1),C.ap,u,u,u,u),C.r,u)},
$S:805}
A.bdR.prototype={
$0(){var x=this.a
x.E(new A.bdQ(x))},
$S:0}
A.bdQ.prototype={
$0(){var x,w,v=this.a,u=v.w
u===$&&B.c()
u.sk(0,u.a)
u=v.f.a
x=v.x
w=v.w
v.r=new B.I(w,new B.pO(u,x),y.d.h("I<Y.T>"))
w.e=C.kY
w.a1(0,v.ga_8())
v.w.p_(0)},
$S:0}
A.bdP.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
E.bp2(new A.bdO(w),x,y.l)},
$S:0}
A.bdO.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.a_(x,new A.a3U(v,new A.bdN(w,d),x),C.e,x,x,x,x,150,x,x,C.iF,x,x,1/0)},
$S:806}
A.bdN.prototype={
$1(d){var x=this.a
x.E(new A.bdM(x,d,this.b))},
$S:807}
A.bdM.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aUQ(v,this.b)
B.bC(this.c,!1).us(null)},
$S:0}
A.aVk.prototype={
$1(d){var x=d.c,w=this.a.b
this.b.De(w.anJ(d,B.Q(C.d.aS(255*(J.h(w.e,d)?0.7:1)),x.gk(x)>>>16&255,x.gk(x)>>>8&255,x.gk(x)&255)),C.QZ,$.a7().oP())},
$S:z+7}
A.auV.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.auU.prototype={
$1(d){var x=this.a
return new B.j(d.a+x.a,d.b+x.b)},
$S:251}
A.auT.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.awr.prototype={
$1(d){var x=this.a
return new A.B4(d,d.m(0,x.d),new A.awq(x,d),null)},
$S:z+8}
A.awq.prototype={
$0(){this.a.e.$1(this.b)},
$S:15}
A.aX9.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.YA.prototype
x.aug=x.j
x=A.Zk.prototype
x.avm=x.j})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.Tz.prototype,"gaI2","aI3",1)
x(v,"gaKp","aKq",3)
x(v,"gaKl","aKm",4)
x(v,"gaI4","aI5",5)
w(v,"gRv","aJF",0)
w(v,"gRy","aKk",0)
w(v,"ga_f","aKG",0)
w(v=A.X4.prototype,"ga_8","aJG",0)
x(v,"gaKn","aKo",1)
x(v,"gaKC","aKD",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.U,[A.a5t,A.afL,A.b7W,A.hZ,A.a9p])
v(B.B,[A.LX,A.uI])
v(B.G,[A.YA,A.Zk])
u(A.Tz,A.YA)
v(B.i0,[A.b3S,A.bdK,A.bdR,A.bdQ,A.bdP,A.bdM,A.awq,A.aX9])
v(B.r,[A.ajX,A.a0Q,A.B4,A.a3U])
u(A.acy,B.fz)
v(B.qP,[A.T9,A.aJT])
u(A.X4,A.Zk)
u(A.bdL,B.iu)
v(B.fc,[A.bdO,A.bdN,A.aVk,A.auV,A.auU,A.auT,A.awr])
u(A.afK,B.ph)
u(A.a_A,A.afL)
u(A.aVj,A.a5t)
x(A.YA,B.cp)
x(A.Zk,B.cp)
w(A.afL,B.D)})()
B.b7(b.typeUniverse,JSON.parse('{"LX":{"B":[],"d":[]},"Tz":{"G":["LX"]},"ajX":{"r":[],"d":[]},"acy":{"fz":["bs"],"al":[]},"uI":{"B":[],"d":[]},"X4":{"G":["uI"]},"afK":{"al":[]},"a_A":{"D":["hZ?"],"D.E":"hZ?"},"B4":{"r":[],"d":[]},"a0Q":{"r":[],"d":[]},"a3U":{"r":[],"d":[]}}'))
B.aqt(b.typeUniverse,JSON.parse('{"a5t":1}'))
var y=(function rtii(){var x=B.a3
return{X:x("hZ"),G:x("l"),s:x("C"),h:x("y<hZ>"),g:x("y<j>"),p:x("y<d>"),z:x("au<G<B>>"),d:x("pO"),O:x("u1<u>"),P:x("zD"),C:x("u4"),x:x("z"),L:x("a6<j>"),t:x("a6<u>"),l:x("d")}})();(function constants(){D.iv=new B.l(4291677645)
D.R1=new A.hZ(0,0,D.iv)
D.vl=new B.l(4280756007)
D.a2d=new B.X(2,0,2,0)
D.a3F=new B.aH(57686,"MaterialIcons",null,!1)
D.a4Z=new B.bM(D.a3F,null,C.m,null,null)
D.a5H=new B.bM(F.pT,null,null,null,null)
D.a4h=new B.aH(58659,"MaterialIcons",null,!1)
D.a5K=new B.bM(D.a4h,null,null,null,null)
D.aEU=new A.aJT(3,"free")
D.kb=new A.T9(0,"pan")
D.nA=new A.T9(1,"scale")
D.aD8=new A.T9(2,"rotate")})()}
$__dart_deferred_initializers__["cq2TTJBHa1LNVbpQ/a1HgtjcHQw="] = $__dart_deferred_initializers__.current
